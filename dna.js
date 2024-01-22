const processDNA = ( DNA ) => {
    const canonicalBases = ['C', 'T', 'A', 'G'];
    if (DNA === '') return '';
    return DNA.split('').filter(char => canonicalBases.includes(char)).join('');
}

module.exports = processDNA;