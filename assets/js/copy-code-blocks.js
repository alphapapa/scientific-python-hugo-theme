// copy-code-blocks.js

// This file implements a button attached to code blocks which copies
// the code to the clipboard.

// This selector should match the PRE elements, each of which may
// itself contain the text to be copied, or may contain a CODE element
// which contains the text to be copied.
const pre_selector = "div.highlight pre";

document.querySelectorAll(pre_selector).forEach(add_button_to);

function add_button_to(element) {
    button = document.createElement("button");
    button.classList.add("copy-button")
    button.append(document.createTextNode("Copy"));
    button.addEventListener("click", copy_content_of);
    element.prepend(button);
}

function copy_content_of(event) {
    // Omit "Copy" prefix from the button itself.
    target = this.parentElement.textContent.substring(4);
    navigator.clipboard.writeText(target)
        .then(() => update_button(this) );
}

function update_button(button, new_text="Copied", reset=true) {
    old_text = button.innerText;
    button.innerText = new_text;
    if (reset) {
        setTimeout(update_button, 1000, button, old_text, false);
    }
}

// copy-code-blocks.js ends.
