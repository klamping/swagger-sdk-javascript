# MailslurpSwaggerSdk.ManageEntitiesApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEmailUsingDELETE**](ManageEntitiesApi.md#deleteEmailUsingDELETE) | **DELETE** /emails/{id} | Delete Email
[**deleteInboxUsingDELETE**](ManageEntitiesApi.md#deleteInboxUsingDELETE) | **DELETE** /inboxes/{id} | Delete Inbox
[**getInboxUsingGET**](ManageEntitiesApi.md#getInboxUsingGET) | **GET** /inboxes/{id} | Get Inbox
[**getInboxesUsingGET**](ManageEntitiesApi.md#getInboxesUsingGET) | **GET** /inboxes | List Inboxes


<a name="deleteEmailUsingDELETE"></a>
# **deleteEmailUsingDELETE**
> deleteEmailUsingDELETE(id)

Delete Email

Deletes an email and removes it from the inbox

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.ManageEntitiesApi();

var id = "id_example"; // String | id

apiInstance.deleteEmailUsingDELETE(id).then(function() {
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

var apiInstance = new MailslurpSwaggerSdk.ManageEntitiesApi();

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

var apiInstance = new MailslurpSwaggerSdk.ManageEntitiesApi();

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

var apiInstance = new MailslurpSwaggerSdk.ManageEntitiesApi();
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

