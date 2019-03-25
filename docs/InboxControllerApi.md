# MailslurpSwaggerSdk.InboxControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInboxUsingPOST**](InboxControllerApi.md#createInboxUsingPOST) | **POST** /inboxes | Create Inbox
[**deleteInboxUsingDELETE**](InboxControllerApi.md#deleteInboxUsingDELETE) | **DELETE** /inboxes/{id} | Delete Inbox
[**getEmailsUsingGET**](InboxControllerApi.md#getEmailsUsingGET) | **GET** /inboxes/{id}/emails | List Inbox&#39;s Emails
[**getInboxUsingGET**](InboxControllerApi.md#getInboxUsingGET) | **GET** /inboxes/{id} | Get Inbox
[**getInboxesUsingGET**](InboxControllerApi.md#getInboxesUsingGET) | **GET** /inboxes | List Inboxes
[**sendEmailUsingPOST**](InboxControllerApi.md#sendEmailUsingPOST) | **POST** /inboxes/{id} | Send Email


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

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();
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

<a name="deleteInboxUsingDELETE"></a>
# **deleteInboxUsingDELETE**
> deleteInboxUsingDELETE(id)

Delete Inbox

Permanently delete an inbox and associated email address

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();

var id = "id_example"; // String | id

apiInstance.deleteInboxUsingDELETE(id).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

null (empty response body)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailsUsingGET"></a>
# **getEmailsUsingGET**
> [EmailPreview] getEmailsUsingGET(id, opts)

List Inbox&#39;s Emails

List emails that inbox has received. To make this endpoint wait for a minimum number of emails use the minCount parameter. The server will retry the inbox database until the minCount is satisfied or the retryTimeout is reached.

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();

var id = "id_example"; // String | Id of inbox that emails belongs to

var opts = { 
  'limit': 56, // Number | Limit the result set, ordered by descending received date time
  'minCount': 789, // Number | Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
  'retryTimeout': 789, // Number | Maximum milliseconds to spend retrying inbox database until minCount emails are returned
  'since': new Date("2013-10-20T19:20:30+01:00") // Date | Exclude emails received before this ISO 8601 date time
};
apiInstance.getEmailsUsingGET(id, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Id of inbox that emails belongs to | 
 **limit** | **Number**| Limit the result set, ordered by descending received date time | [optional] 
 **minCount** | **Number**| Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached. | [optional] 
 **retryTimeout** | **Number**| Maximum milliseconds to spend retrying inbox database until minCount emails are returned | [optional] 
 **since** | **Date**| Exclude emails received before this ISO 8601 date time | [optional] 

### Return type

[**[EmailPreview]**](EmailPreview.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboxUsingGET"></a>
# **getInboxUsingGET**
> Inbox getInboxUsingGET(id)

Get Inbox

Returns an inbox&#39;s properties, including its email address

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();

var id = "id_example"; // String | id

apiInstance.getInboxUsingGET(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id | 

### Return type

[**Inbox**](Inbox.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getInboxesUsingGET"></a>
# **getInboxesUsingGET**
> [Inbox] getInboxesUsingGET()

List Inboxes

List your inboxes

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();
apiInstance.getInboxesUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Inbox]**](Inbox.md)

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

var apiInstance = new MailslurpSwaggerSdk.InboxControllerApi();

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

