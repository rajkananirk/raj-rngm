$(function () {

    $('input[type="radio"]').on('change', function () {
        var groupName = $(this).attr('name');

        $('input[name="' + groupName + '"]').siblings('label.rating__label').removeClass('checked');

        var selectedId = $(this).attr('id');
        var questionId = selectedId.split('-')[0];

        $('label.rating__label[for^="' + questionId + '-"]').each(function () {
            var labelFor = $(this).attr('for');
            if (labelFor <= selectedId) {
                $(this).addClass('checked');
            }
        });
    });
});

/* Footer position manage as per the content JS starts */
window.addEventListener('DOMContentLoaded', () => {
    adjustFooter();
});

function adjustFooter() {
    const content = document.querySelector('#content');
    const footer = document.querySelector('footer');
    const header = document.querySelector('header');

    const adjustFooter = () => {
        const contentHeight = content.clientHeight;
        const windowHeight = window.innerHeight;
        const footerHeight = footer.clientHeight;
        const headerHeight = header.clientHeight;

        if (contentHeight + footerHeight + headerHeight < windowHeight) {
            footer.style.position = 'fixed';
            footer.style.bottom = '0';
            footer.style.left = '0';
            footer.style.right = '0';
            footer.style.width = '100%';
        } else {
            footer.style.position = 'static';
        }
    };

    adjustFooter();

    window.addEventListener('resize', adjustFooter);
}
/* Footer position manage as per the content JS ends */