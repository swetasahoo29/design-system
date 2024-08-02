#!/usr/bin/env node
import { execSync } from 'child_process';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const [, , task, workspaceNameOrFlag, flagValue] = process.argv;

if (!task) {
	console.error('Please provide a task.');
	console.error('Usage: exec <task> [<workspaceName> | -w <directory>]');
	process.exit(1);
}

const potentialDirs = ['packages', 'libs', 'apps'];

const runCommand = packageName => {
	const command = `nx ${task} ${packageName}`;
	try {
		execSync(command, { stdio: 'inherit' });
	} catch (error) {
		console.error(
			`Failed to run the task ${task} on the workspace ${packageName}`
		);
		process.exit(1);
	}
};

if (workspaceNameOrFlag === '-w') {
	if (!flagValue || !potentialDirs.includes(flagValue)) {
		console.error('Please provide a valid directory with the -w flag.');
		console.error('Usage: exec <task> -w <directory>');
		process.exit(1);
	}

	const dirPath = flagValue;
	const subdirs = readdirSync(dirPath).filter(subdir => {
		const subdirPath = join(dirPath, subdir);
		return (
			statSync(subdirPath).isDirectory() &&
			readdirSync(subdirPath).includes('package.json')
		);
	});

	if (subdirs.length === 0) {
		console.error(`No packages found in the directory ${dirPath}`);
		process.exit(1);
	}

	subdirs.forEach(subdir => {
		const packageJsonPath = join(dirPath, subdir, 'package.json');
		try {
			const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
			runCommand(packageJson.name);
		} catch (error) {
			console.error(`Failed to read package.json for ${subdir} in ${dirPath}`);
		}
	});
} else {
	const workspaceName = workspaceNameOrFlag;

	let packageName;
	let found = false;

	for (const dir of potentialDirs) {
		const packageJsonPath = join(dir, workspaceName, 'package.json');
		try {
			const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
			packageName = packageJson.name;
			found = true;
			break;
		} catch (error) {
			// Continue searching in other directories
		}
	}

	if (!found) {
		console.error(
			`Failed to find package.json for workspace ${workspaceName} in any known directories.`
		);
		process.exit(1);
	}

	runCommand(packageName);
}
