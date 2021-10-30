export const getRandomGreeting = () => {
    const messages = [
        " what's popping?",
        ' what kind of music are in mood to play?',
        " let's groove on some nice hits!",
        ' why is everything so quiet in here?',
        ' are in mood to party?',
    ]

    return messages[Math.floor(Math.random() * messages.length)]
}

export const getTwoDigitNumber = (num: number) => {
    return num < 10 ? '0' + num : num
}
