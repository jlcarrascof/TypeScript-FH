(() => {

    const batman: string = 'Batman';
    const greenLantern: string = "Green Lantern";
    const blackVulcano: string = `Hero: Black Vulcano`;

    console.log(`I'm ${ batman }`);

    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || `It's not present`);

})()
