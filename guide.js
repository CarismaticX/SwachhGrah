function getDisposalSteps() {
    const wasteType = document.getElementById('wasteType').value;
    const stepsDiv = document.getElementById('steps');
    let steps = '';
    
    switch (wasteType) {
        case 'plastic':
            steps = `
                <p>1. Rinse and clean the plastic containers.</p>
                <p>2. Separate recyclable plastic from non-recyclable.</p>
                <p>3. Drop off at a recycling center or designated bin.</p>
            `;
            break;
        case 'glass':
            steps = `
                <p>1. Rinse and remove any lids or caps.</p>
                <p>2. Separate colored and clear glass.</p>
                <p>3. Take it to a glass recycling facility or bin.</p>
            `;
            break;
        case 'paper':
            steps = `
                <p>1. Remove any plastic or metal parts (e.g., spiral bindings).</p>
                <p>2. Flatten and bundle the paper.</p>
                <p>3. Dispose of it in a paper recycling bin.</p>
            `;
            break;
        case 'organic':
            steps = `
                <p>1. Collect food scraps and yard waste.</p>
                <p>2. Add it to a compost bin or pile.</p>
                <p>3. Turn the compost regularly and let it decompose.</p>
            `;
            break;
        case 'electronic':
            steps = `
                <p>1. Remove personal data from devices.</p>
                <p>2. Check for e-waste recycling programs.</p>
                <p>3. Drop off at an authorized e-waste recycling center.</p>
            `;
            break;
        case 'metal':
            steps = `
                <p>1. Rinse and clean metal containers.</p>
                <p>2. Separate ferrous and non-ferrous metals.</p>
                <p>3. Take to a metal recycling facility.</p>
            `;
            break;
        default:
            steps = '<p>No steps available for this waste type.</p>';
    }

    stepsDiv.innerHTML = steps;
}