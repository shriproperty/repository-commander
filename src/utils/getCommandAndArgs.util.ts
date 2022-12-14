function getCommandAndArgs(body: string) {
	const split = body.trim().split(" ");
	const command = split[0];
	const args = split.slice(1);

	return {
		command,
		args,
	};
}

export default getCommandAndArgs;
