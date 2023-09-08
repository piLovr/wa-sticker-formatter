import { IRawMetadata, Metadata } from '../../Types'
import Utils from '../../Utils'

export default class RawMetadata implements IRawMetadata {
    emojis: string[]
    'sticker-pack-id': string
    'sticker-pack-name': string
    'sticker-pack-publisher': string

    'bot-link': string
    'creator-github': string
    "code": string
    constructor(options: Metadata) {
        this['sticker-pack-id'] = options.id || Utils.generateStickerID()
        this['sticker-pack-name'] = options.pack || ''
        this['sticker-pack-publisher'] = options.author || ''
        this.emojis = options.categories || []
        if(options.channel) this['bot-link'] = options.channel
        if(options.github) this['creator-github'] = options.github
        if(options.code) this['code'] = options.code
    }
}
