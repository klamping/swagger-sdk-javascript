# MailslurpSwaggerSdk.EmailControllerApi

All URIs are relative to *https://api.mailslurp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEmailUsingDELETE**](EmailControllerApi.md#deleteEmailUsingDELETE) | **DELETE** /emails/{id} | Delete Email
[**getEmailAnalyticsUsingGET**](EmailControllerApi.md#getEmailAnalyticsUsingGET) | **GET** /emails/{id}/analytics | Get Email Analytics
[**getEmailUsingGET**](EmailControllerApi.md#getEmailUsingGET) | **GET** /emails/{id} | Get Email Content


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

var apiInstance = new MailslurpSwaggerSdk.EmailControllerApi();

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

<a name="getEmailAnalyticsUsingGET"></a>
# **getEmailAnalyticsUsingGET**
> EmailAnalytics getEmailAnalyticsUsingGET(id)

Get Email Analytics

Returns a spam analysis on a given email

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.EmailControllerApi();

var id = "id_example"; // String | id

apiInstance.getEmailAnalyticsUsingGET(id).then(function(data) {
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

[**EmailAnalytics**](EmailAnalytics.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEmailUsingGET"></a>
# **getEmailUsingGET**
> Email getEmailUsingGET(id)

Get Email Content

Returns a email summary object with headers and content. To retrieve the raw email download it from the &#x60;raw&#x60; url.

### Example
```javascript
var MailslurpSwaggerSdk = require('mailslurp-swagger-sdk');
var defaultClient = MailslurpSwaggerSdk.ApiClient.instance;

// Configure API key authorization: API_KEY
var API_KEY = defaultClient.authentications['API_KEY'];
API_KEY.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//API_KEY.apiKeyPrefix = 'Token';

var apiInstance = new MailslurpSwaggerSdk.EmailControllerApi();

var id = "id_example"; // String | id

apiInstance.getEmailUsingGET(id).then(function(data) {
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

[**Email**](Email.md)

### Authorization

[API_KEY](../README.md#API_KEY)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

