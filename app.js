const FACTORS = { MB: 1, GB: 1024, TB: 1024 * 1024 };

function convertDataUnits(val, from, to) {
  const mb = val * (FACTORS[from] || 1);
  return mb / (FACTORS[to] || 1);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const fVal = document.getElementById('fromVal');
    const fUnit = document.getElementById('fromUnit');
    const tVal = document.getElementById('toVal');
    const tUnit = document.getElementById('toUnit');

    function update() {
      const v = parseFloat(fVal.value) || 0;
      tVal.value = convertDataUnits(v, fUnit.value, tUnit.value).toFixed(2);
    }
    [fVal, fUnit, tUnit].forEach(el => el.addEventListener('input', update));
    update();
  });
}
if (typeof module !== 'undefined') module.exports = { convertDataUnits };
