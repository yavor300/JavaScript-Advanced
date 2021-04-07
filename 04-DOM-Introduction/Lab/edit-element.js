function edit(ref, occurence, replace) {
    ref.textContent = ref.textContent.replaceAll(occurence, replace);
}