//% color=#e67e22 icon="\uf130" block="Speech"
namespace speech {
    /**
     * Habla el texto proporcionado usando el sintetizador de voz del micro:bit.
     * @param text El texto a pronunciar
     */
    //% block="decir %text"
    //% weight=100
    export function say(text: string): void {
        // @ts-ignore
        speech.speak(text)
    }

    /**
     * Pronuncia un número como palabra (por ejemplo, 1234 → "mil doscientos treinta y cuatro")
     * @param number El número a pronunciar
     */
    //% block="pronunciar número %number"
    //% weight=95
    export function sayNumber(number: number): void {
        // @ts-ignore
        speech.speak(number.toString())
    }

    /**
     * Ajusta la velocidad de la voz (50-200, por defecto 120)
     * @param speed Velocidad de la voz
     */
    //% block="ajustar velocidad de voz a %speed"
    //% speed.min=50 speed.max=200 speed.defl=120
    //% weight=90
    export function setSpeed(speed: number): void {
        // @ts-ignore
        speech.setSpeed(speed)
    }

    /**
     * Ajusta el tono de la voz (0-255, por defecto 128)
     * @param pitch Tono de la voz
     */
    //% block="ajustar tono de voz a %pitch"
    //% pitch.min=0 pitch.max=255 pitch.defl=128
    //% weight=85
    export function setPitch(pitch: number): void {
        // @ts-ignore
        speech.setPitch(pitch)
    }

    /**
     * Ajusta la boca (0-255, por defecto 128)
     * @param mouth Forma de la boca
     */
    //% block="ajustar boca a %mouth"
    //% mouth.min=0 mouth.max=255 mouth.defl=128
    //% weight=80
    export function setMouth(mouth: number): void {
        // @ts-ignore
        speech.setMouth(mouth)
    }

    /**
     * Ajusta la garganta (0-255, por defecto 128)
     * @param throat Forma de la garganta
     */
    //% block="ajustar garganta a %throat"
    //% throat.min=0 throat.max=255 throat.defl=128
    //% weight=75
    export function setThroat(throat: number): void {
        // @ts-ignore
        speech.setThroat(throat)
    }

    /**
     * Habla el texto como un robot (modo robótico)
     * @param text El texto a pronunciar
     */
    //% block="decir como robot %text"
    //% weight=70
    export function sayRobot(text: string): void {
        setMouth(200)
        setThroat(100)
        setPitch(90)
        setSpeed(110)
        // @ts-ignore
        speech.speak(text)
        // Restaurar valores
        setMouth(128)
        setThroat(128)
        setPitch(128)
        setSpeed(120)
    }
}