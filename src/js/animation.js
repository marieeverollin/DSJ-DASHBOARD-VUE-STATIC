import AOS from 'aos'

export const initAnimations = () => {
    initAOS()
}

function initAOS() {
    AOS.init({
        offset: 130,
        duration: 1000,
        delay: 50,
        once: true,
        disable: true
    });
}

export default initAnimations