// translate to english
/**
 * Variable substitution in translation strings allows the 
 * translation to look natural.
 */
import englishMessages from 'ra-language-english';

export default {
    ...englishMessages,
    event: {
        post: {
            create: 'created a new post "%{name}"',
            modify: 'modified post "%{name}"',
        }
    }
}