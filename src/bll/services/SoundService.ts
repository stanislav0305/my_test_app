import Sound from 'react-native-sound'
import NumberHelper from '@utils/numberHelper'
Sound.setCategory('Playback')


export default class SoundService {
    private static sounds: Map<string, Sound>

    public static clear() {
        SoundService.sounds = new Map<string, Sound>()
    }

    public static loadAllSounds(filenamesOrFiles: string[]) {
        SoundService.clear()

        filenamesOrFiles.forEach(element => {
            SoundService.loadSound(element)
        })
    }

    private static loadSound(filenameOrFile: string) {
        const sound = new Sound(filenameOrFile, Sound.MAIN_BUNDLE, error => {
            if (error) {
                console.error('Error loading sound', error)
                return
            }
        })

        SoundService.sounds.set(filenameOrFile, sound)
    }

    public static playRandomSound(filenamesOrFiles: string[], callback: (() => void) | null = null) {
        const num = NumberHelper.getRandom(0, filenamesOrFiles.length - 1)
        console.log('num', num)
        console.log('random file:', filenamesOrFiles[num])

        SoundService.playSound(filenamesOrFiles[num], callback)
    }

    public static playSound(filenameOrFile: string, callback: (() => void) | null = null) {
        const sound = SoundService.sounds.get(filenameOrFile)

        console.log('sound file name:', filenameOrFile)

        if (!sound) {
            console.error('Error: sound for playing not found')
            return
        }

        sound.play(success => {
            !success && console.error('Error playing sound.')
            callback && callback()
        })
    }

    public static stopSound() {

    }

    public static testPlay() {
        var whoosh = new Sound('prefect_correct.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('failed to load the sound', error)
                return
            }
            // loaded successfully
            console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels())

            // Play the sound with an onEnd callback
            whoosh.play((success) => {
                if (success) {
                    console.log('successfully finished playing')
                } else {
                    console.log('playback failed due to audio decoding errors')
                }
            })
        })
    }
}