import social0 from '../assets/email_icon.png'
import social1 from '../assets/linkedin_icon.png'
import social2 from '../assets/github_icon.png'
import social3 from '../assets/twitter_icon.png'

//Remember to put array as const to prevent changes to it from other components or codebase.
const SOCIALDATA = [
    {
        id: 0,
        title: 'email',
        description: 'Personal email account',
        link: 'mailto:nyk.com.sg@gmail.com',
        image: social0
    },
    {
        id: 1,
        title: 'linkedin',
        description: 'Personal linkedin account',
        link: 'https://linkedin.com/in/ng-yong-kang-a60871193/',
        image: social1
    },
    {
        id: 2,
        title: 'github',
        description: 'Personal github account',
        link: 'https://github.com/ngyongkang',
        image: social2
    },
    {
        id: 3,
        title: 'twitter',
        description: 'Personal Twitter account',
        link: 'https://twitter.com/',
        image: social3
    }
];

export default SOCIALDATA;