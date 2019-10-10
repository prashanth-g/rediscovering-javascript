const greet = function(name, msg = `Hi${name.length}`) {
    console.log(`${msg} ${name}`);
}

greet(`Scope`);