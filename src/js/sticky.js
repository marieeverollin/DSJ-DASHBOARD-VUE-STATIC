import $ from 'jquery';

export const initSticky = () => {
    const updateStickySidebar = () => {
        const sidebar = $('.sidebar-content');
        const sidebarContainer = $('.sidebar');
        const mainContent = $('.main-content');
        const scrollPosition = $(window).scrollTop();
        const stickyPoint = sidebarContainer.offset().top;
        const windowWidth = $(window).width();

        if (windowWidth > 768) {
            if (scrollPosition > stickyPoint) {
                sidebar.addClass('sticky-active');
                sidebar.css({
                    'position': 'fixed',
                    'top': '0',
                    'left': sidebarContainer.offset().left,
                    'width': sidebarContainer.outerWidth(),
                    'z-index': '1000'
                });
            } else {
                sidebar.removeClass('sticky-active');
                sidebar.css({
                    'position': 'relative',
                    'top': 'auto',
                    'left': 'auto',
                    'width': 'auto'
                });
            }
        } else {
            sidebar.removeClass('sticky-active');
            sidebar.css({
                'position': 'relative',
                'top': 'auto',
                'left': 'auto',
                'width': 'auto'
            });
        }
    };

    $(window).on('scroll resize', updateStickySidebar);
    $(window).on('load', updateStickySidebar);
};

export default initSticky;
