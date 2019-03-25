/**
 * MailSlurp API
 * Send and receive email from ephemeral email addresses via REST. Test email signup, verification codes, transactional-mail and more.  ### About [MailSlurp](https://www.mailslurp.com/) is a SAAS API for sending and receiving emails from ephemeral email inboxes. These inboxes can be created on the fly and each has a unique email address.  ### Why MailSlurp was built for **testing software or processes that interact with email in some way**. For more information see the [homepage](https://www.mailslurp.com/).  ### Links  - [Create an account](https://app.mailslurp.com/) - [Get API Key](https://app.mailslurp.com/) - [API Documentation](https://docs.mailslurp.com/) - [Official SDK Libraries](https://github.com/mailslurp) - [Support](https://www.mailslurp.com/#support) / [Issues](mailto:contact@mailslurp.com) - [Swagger JSON](https://swagger.mailslurp.com/)   ### Usage **Recommended** There is a hand written [Javascript SDK](https://www.npmjs.com/package/mailslurp-client) with Typescript support. It is [published on NPM](https://www.npmjs.com/package/mailslurp-client) and is the recommended client. However if you don't want to use it see the generated SDKs below in other languages.  - `npm install mailslurp-client`  See NPM package for [more information](https://www.npmjs.com/package/mailslurp-client).  **HTTP API** You can call the MailSlurp API from any HTTP client in any language. HTTP endpoints are [documented here](https://docs.mailslurp.com).  **Other official SDKs** Or you use one of the official generated [SDK Libraries](https://github.com/mailslurp).  - [Official Typescript SDK](https://github.com/mailslurp/swagger-sdk-typescript-fetch) - [Official Python SDK](https://github.com/mailslurp/swagger-sdk-python) - [Official C# SDK](https://github.com/mailslurp/swagger-sdk-csharp) - [Official Java SDK](https://github.com/mailslurp/swagger-sdk-java) - [Official Swift SDK](https://github.com/mailslurp/swagger-sdk-swift) - [Official Golang SDK](https://github.com/mailslurp/swagger-sdk-go) - [Official Javascript SDK](https://github.com/mailslurp/swagger-sdk-javascript) - [Official PHP SDK](https://github.com/mailslurp/swagger-sdk-php) - [Official Ruby SDK](https://github.com/mailslurp/swagger-sdk-ruby)  **Custom SDKs** You can also compile your own library with SwaggerCodegen and the [Swagger Spec](https://swagger.mailslurp.com).  **Demo application** Lastly, there is an interactive GUI available at [demo.mailslurp.com](https://demo.mailslurp.com/) for testing requests.  ### Authentication An [API Key](#authentication) must be passed as a header in all requests. To get an API Key [sign up](https://app.mailslurp.com/sign-up) and log in to the [MailSlurp Dashboard](https://app.mailslurp.com/) web app.  > Use `test` as an API Key when using the demo application.  ### Terminology - [Inbox](#/definitions/InboxDto)     - A unique email address     - Unlimited in number     - Can send and receive emails - [Email](#/definitions/Email)     - Belongs to an inbox     - Contains summary and body     - Raw content stored on S3  ### Example operation - Before you send or receive an email you need to create an inbox - It is recommended to create a new empty inbox for each test case run - The inbox email address is returned with the response for the GetInbox and CreateInbox operations. - You can send an email (from your application or MailSlurp) to that address and it will be saved in the matching inbox - To get the email, ListEmails in the inbox and get a list of the current emails. Then GetEmail by the id given. - Emails are asynchronous so **it is highly recommended to use the minCount** parameter when using ListEmails so that MailSlurp retries the database until your expected count is met. This means you should increase your request timeout accordingly.   ### Support **Issues** If you encounter issues please [contact the developers](mailto:contact@mailslurp.com) or open a ticket in [GitHub](https://www.github.com/mailslurp).  **Contact** Please contact MailSlurp at any time via [the support page](https://www.mailslurp.com/#support). 
 *
 * OpenAPI spec version: 0.0.1-alpha
 * Contact: contact@mailslurp.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MailslurpSwaggerSdk) {
      root.MailslurpSwaggerSdk = {};
    }
    root.MailslurpSwaggerSdk.SendEmailOptions = factory(root.MailslurpSwaggerSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SendEmailOptions model module.
   * @module MailSlurpModels/SendEmailOptions
   * @version 0.0.1-alpha
   */

  /**
   * Constructs a new <code>SendEmailOptions</code>.
   * Options for sending an email message from an inbox
   * @alias module:MailSlurpModels/SendEmailOptions
   * @class
   * @param to {Array.<String>} Destination email address
   */
  var exports = function(to) {
    var _this = this;









    _this['to'] = to;
  };

  /**
   * Constructs a <code>SendEmailOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:MailSlurpModels/SendEmailOptions} obj Optional instance to populate.
   * @return {module:MailSlurpModels/SendEmailOptions} The populated <code>SendEmailOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
      }
      if (data.hasOwnProperty('charset')) {
        obj['charset'] = ApiClient.convertToType(data['charset'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('html')) {
        obj['html'] = ApiClient.convertToType(data['html'], 'Boolean');
      }
      if (data.hasOwnProperty('replyTo')) {
        obj['replyTo'] = ApiClient.convertToType(data['replyTo'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Optional list of bcc destination email addresses
   * @member {Array.<String>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * Contents of email
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Optional list of cc destination email addresses
   * @member {Array.<String>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * Optional charset
   * @member {String} charset
   */
  exports.prototype['charset'] = undefined;
  /**
   * Optional from address. If not set source inbox address will be used
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Boolean} html
   */
  exports.prototype['html'] = undefined;
  /**
   * Optional replyTo header
   * @member {String} replyTo
   */
  exports.prototype['replyTo'] = undefined;
  /**
   * Email subject line
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Destination email address
   * @member {Array.<String>} to
   */
  exports.prototype['to'] = undefined;



  return exports;
}));


