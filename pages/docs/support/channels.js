import markdown from 'markdown-in-js'
import withDoc, { components } from '../../../lib/with-doc'

import { sergio } from '../../../lib/data/team'

// prettier-ignore
export default withDoc({
  title: 'Support channels',
  date: '21 Jul 2017',
  authors: [sergio],
})(markdown(components)`
Right now we have many support channels you can use to solve doubts where the team is willing to help.

## Status
Check our [Twitter status account](https://twitter.com/zeit_status) to verify if the platform have some issue at the moment.

## Documentation
Check the documentation, here we have a lot of information about how you can use the CLI and the platform, and we have project examples and integration with third-party services

## zeit.chat
Our community's Slack, there you can ask for help and either the community and the ZEIT Team will answer and help you solve any doubt you could have. You can access to it going to [zeit.chat](https://zeit.chat).

## Twitter
You can use Twitter to send us a DM or mention to [@zeithq](https://twitter.com/zeithq) and a team member will contact you and help you with anything.

## Email
The last but not least support channel is our [support@zeit.co](mailto:support@zeit.co) email. If you have very custom questions or related to private information (eg. billing issues) you don't want to share in Slack or you like more to use email you can contact us and we happily will help you as far as we could.
`)
