function edit(ref, match, replacer) {
    const mathcer = new RegExp(match, 'g');
    const result = ref.textContent.replace(mathcer, replacer);
    ref.textContent = result;
}
