# MailslurpSwaggerSdk.SendEmailsApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInboxUsingPOST**](SendEmailsApi.md#createInboxUsingPOST) | **POST** /inboxes | Create Inbox
[**sendEmailUsingPOST**](SendEmailsApi.md#sendEmailUsingPOST) | **POST** /inboxes/{id} | Send Email


<a name="createInboxUsingPOST"></a>
# **createInboxUsingPOST**
> Inbox createInboxUsingPOST()

Create Inbox

Create a new ephemeral email address to send and receive from

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.SendEmailsApi();
apiInstance.createInboxUsingPOST().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Inbox**](Inbox.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendEmailUsingPOST"></a>
# **sendEmailUsingPOST**
> sendEmailUsingPOST(id, sendEmailOptions)

Send Email

Send an email from the inbox&#39;s email address

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.SendEmailsApi();

var id = "id_example"; // String | id

var sendEmailOptions = new MailslurpSwaggerSdk.SendEmailOptions(); // SendEmailOptions | sendEmailOptions

apiInstance.sendEmailUsingPOST(id, sendEmailOptions).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 
 **sendEmailOptions** | [**SendEmailOptions**](SendEmailOptions.md)| sendEmailOptions | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

