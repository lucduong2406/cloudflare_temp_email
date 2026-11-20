export const MESSAGE_REGISTRY = {
  "components.FilterEditor": {
    "hint": { "en": "No conditions: match everything" },
    "visual": { "en": "Visual" },
    "invalid": { "en": "Invalid rule: check structure, operators, options and regex. Maximum 8 levels and 100 nodes." },
    "and": { "en": "AND: all match" },
    "or": { "en": "OR: any match" },
    "not": { "en": "NOT: negate" },
    "logic": { "en": "Rule type" },
    "condition": { "en": "Condition" },
    "remove": { "en": "Remove" },
    "field": { "en": "Field" },
    "operator": { "en": "Operator" },
    "value": { "en": "Value" },
  },
  "components.WebhookComponent": {
    "filter": { "en": "Filter" },
    "filterHelp": { "en": "Custom headers: e.g. header.List-ID. Text ignores case by default; regex uses JavaScript syntax with optional i, m, s flags." },
    "filter_from": { "en": "Sender" },
    "filter_to": { "en": "Delivery address" },
    "filter_subject": { "en": "Subject" },
    "filter_text": { "en": "Plain text" },
    "filter_html": { "en": "HTML body" },
    "filter_equals": { "en": "Equals" },
    "filter_contains": { "en": "Contains" },
    "filter_startsWith": { "en": "Starts with" },
    "filter_endsWith": { "en": "Ends with" },
    "filter_regex": { "en": "Regular expression" },
    "filter_caseSensitive": { "en": "Case sensitive" },
    "filter_flags": { "en": "Regex flags" },
    "filterSkipped": { "en": "Conditions did not match; webhook not sent" },
    "filterMatched": { "en": "Conditions match (check only; not sent)" },
    "checkFilter": { "en": "Check only" },
    "filterCheckTip": { "en": "Checks matching only; no webhook is sent. Test sends using the existing settings without applying filters." },
    "randomMail": { "en": "Random email", },
    "specifiedMail": { "en": "Specify ID", },
    "mailId": { "en": "Email ID", },
    "invalidMailId": { "en": "Enter a valid positive integer email ID", },
    "cancel": { "en": "Cancel", },
    "enable": {
      "en": "Enable",
      },
    "fillInDemoTip": {
      "en": "Please modify the URL and other settings to your own",
      },
    "notEnabled": {
      "en": "Webhook is not enabled for you",
      },
    "presets": {
      "en": "Presets",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Success",
      },
    "test": {
      "en": "Test",
      },
    "urlMissing": {
      "en": "URL is required",
      }
  },
  "components.MailBox": {
    "attachments": {
      "en": "Show Attachments",
      },
    "autoRefresh": {
      "en": "Auto Refresh",
      },
    "backToList": {
      "en": "Back to List",
      },
    "cancelMultiAction": {
      "en": "Cancel Multi Action",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteMailTip": {
      "en": "Are you sure you want to delete mail?",
      },
    "downloadMail": {
      "en": "Download Mail",
      },
    "emptyInbox": {
      "en": "Your inbox is empty",
      },
    "forwardMail": {
      "en": "Forward",
      },
    "keywordQueryTip": {
      "en": "Filter current page",
      },
    "multiAction": {
      "en": "Multi Action",
      },
    "nextMail": {
      "en": "Next",
      },
    "pleaseSelectMail": {
      "en": "Please select mail",
      },
    "prevMail": {
      "en": "Previous",
      },
    "query": {
      "en": "Query",
      },
    "refresh": {
      "en": "Refresh",
      },
    "refreshAfter": {
      "en": "Refresh After {msg} Seconds",
      },
    "reply": {
      "en": "Reply",
      },
    "saveToS3": {
      "en": "Save to S3",
      },
    "selectAll": {
      "en": "Select All of This Page",
      },
    "showHtmlMail": {
      "en": "Show Html Mail",
      },
    "showTextMail": {
      "en": "Show Text Mail",
      },
    "success": {
      "en": "Success",
      },
    "unselectAll": {
      "en": "Unselect All",
      }
  },
  "components.AiExtractInfo": {
    "authCode": {
      "en": "Verification Code",
      },
    "authLink": {
      "en": "Authentication Link",
      },
    "copyFailed": {
      "en": "Copy failed",
      },
    "copySuccess": {
      "en": "Copied successfully",
      },
    "open": {
      "en": "Open",
      },
    "otherLink": {
      "en": "Other Link",
      },
    "serviceLink": {
      "en": "Service Link",
      },
    "subscriptionLink": {
      "en": "Subscription Link",
      }
  },
  "components.MailContentRenderer": {
    "from": {
      "en": "From",
      },
    "to": {
      "en": "To",
      },
    "mailDetails": {
      "en": "Mail details",
      },
    "moreActions": {
      "en": "More actions",
      },
    "more": { "en": "More", },
    "attachments": {
      "en": "Attachments",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteMailTip": {
      "en": "Are you sure you want to delete mail?",
      },
    "downloadMail": {
      "en": "Download Mail",
      },
    "forward": {
      "en": "Forward",
      },
    "fullscreen": {
      "en": "Fullscreen",
      },
    "markAsRead": {
      "en": "Mark as Read",
      },
    "markAsUnread": {
      "en": "Mark as Unread",
      },
    "loadRemoteImages": {
      "en": "Load Images",
      },
    "remoteImagesBlocked": {
      "en": "{count} remote resources blocked to protect your privacy",
      },
    "reply": {
      "en": "Reply",
      },
    "saveToS3": {
      "en": "Save to S3",
      },
    "showHtmlMail": {
      "en": "Show HTML Mail",
      },
    "showTextMail": {
      "en": "Show Text Mail",
      },
    "size": {
      "en": "Size",
      }
  },
  "components.Turnstile": {
    "refresh": {
      "en": "Refresh",
      }
  },
  "components.SendBox": {
    "cancelMultiAction": {
      "en": "Cancel Multi Action",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteMailTip": {
      "en": "Are you sure you want to delete mail?",
      },
    "emptySent": {
      "en": "No sent emails",
      },
    "multiAction": {
      "en": "Multi Action",
      },
    "pleaseSelectMail": {
      "en": "Please select a mail to view.",
      },
    "refresh": {
      "en": "Refresh",
      },
    "selectAll": {
      "en": "Select All of This Page",
      },
    "showCode": {
      "en": "Change View Original Code",
      },
    "success": {
      "en": "Success",
      },
    "unselectAll": {
      "en": "Unselect All",
      }
  },
  "components.AddressSelect": {
    "selectMailbox": {
      "en": "Select Mailbox",
      },
    "copied": {
      "en": "Copied",
      },
    "copy": {
      "en": "Copy",
      },
    "localAddresses": {
      "en": "Local Email Addresses",
      },
    "linkedMailboxes": {
      "en": "Linked Mailboxes",
      }
  },
  "components.AddressCredentialModal": {
    "passwordOnlyTip": {
      "en": "Sign in with the mailbox password to view a session token.",
      },
    "sessionToken": {
      "en": "Session Token",
      },
    "expiresAt": {
      "en": "Expires at",
      },
    "sessionTokenTip": {
      "en": "This token expires at the time shown above. Sign in again after expiry. Auto-login links and QR codes use the same token and expire with it.",
      },
    "addressCredential": {
      "en": "Address Credential",
      },
    "addressCredentialLabel": {
      "en": "Mailbox access credential",
      },
    "addressPassword": {
      "en": "Mailbox Password",
      },
    "agentAccess": {
      "en": "AI Agent",
      },
    "agentAccessTip": {
      "en": "Use this mailbox from an AI agent with the Address JWT and parsed-mail APIs.",
      },
    "agentConfig": {
      "en": "Agent config",
      },
    "agentSkill": {
      "en": "Agent skill",
      },
    "apiBase": {
      "en": "API Base",
      },
    "autoLoginLink": {
      "en": "Auto-login link",
      },
    "autoLoginQrCode": {
      "en": "Scan to open on mobile",
      },
    "autoLoginQrCodeTip": {
      "en": "Anyone with this QR code can access this mailbox. Do not share it.",
      },
    "copyFailed": {
      "en": "Copy failed",
      },
    "copySection": {
      "en": "Copy",
      },
    "copySuccess": {
      "en": "Copied",
      },
    "currentAddress": {
      "en": "Email address",
      },
    "docs": {
      "en": "Docs",
      },
    "imapHost": {
      "en": "IMAP host",
      },
    "imapPort": {
      "en": "IMAP port",
      },
    "password": {
      "en": "Password",
      },
    "plainOrProxyTls": {
      "en": "Plain or proxy TLS",
      },
    "security": {
      "en": "Security",
      },
    "smtpHost": {
      "en": "SMTP host",
      },
    "smtpImapAccess": {
      "en": "SMTP / IMAP",
      },
    "smtpImapTip": {
      "en": "Use these values in mail clients after the administrator configures the SMTP/IMAP proxy. The password can be the Address JWT shown here, or the mailbox password when you have it.",
      },
    "smtpPort": {
      "en": "SMTP port",
      },
    "starttls": {
      "en": "STARTTLS",
      },
    "tip": {
      "en": "Use these credentials only with clients and agents you trust.",
      },
    "title": {
      "en": "Address Credentials & Connection Methods",
      },
    "username": {
      "en": "Username",
      }
  },
  "views.user.UserMailBox": {
    "addressQueryTip": {
      "en": "Leave blank to query all addresses",
      },
    "query": {
      "en": "Query",
      }
  },
  "views.Index": {
    "about": {
      "en": "About",
      },
    "mailboxSettings": {
      "en": "Mailbox Settings",
      },
    "appearance": {
      "en": "Appearance",
      },
    "auto_reply": {
      "en": "Auto Reply",
      },
    "enterSimpleMode": {
      "en": "Simple Mode",
      },
    "inbox": {
      "en": "Inbox",
      },
    "query": {
      "en": "Query",
      },
    "s3Attachment": {
      "en": "S3 Attachment",
      },
    "saveToS3Success": {
      "en": "save to s3 success",
      },
    "sendbox": {
      "en": "Sent",
      },
    "sendmail": {
      "en": "Send Mail",
      },
    "webhookSettings": {
      "en": "Webhook Settings",
      }
  },
  "views.Footer": {
    "copyright": {
      "en": "Copyright",
      }
  },
  "views.user.UserSettings": {
    "actions": {
      "en": "Actions",
      },
    "createPasskey": {
      "en": "Create Passkey",
      },
    "created_at": {
      "en": "Created At",
      },
    "deletePasskey": {
      "en": "Delete Passkey",
      },
    "logout": {
      "en": "Logout",
      },
    "logoutConfirm": {
      "en": "Are you sure you want to logout?",
      },
    "passkeyCreated": {
      "en": "Passkey created successfully",
      },
    "passkeyNamePlaceholder": {
      "en": "Please enter the passkey name or leave it empty to generate a random one",
      },
    "passkey_name": {
      "en": "Passkey Name",
      },
    "passordTip": {
      "en": "The server will only receive the hash value of the password, and will not receive the plaintext password, so it cannot view or retrieve your password. If the administrator enables email verification, you can reset the password in incognito mode",
      },
    "renamePasskey": {
      "en": "Rename Passkey",
      },
    "renamePasskeyNamePlaceholder": {
      "en": "Please enter the new passkey name",
      },
    "showPasskeyList": {
      "en": "Show Passkey List",
      },
    "updated_at": {
      "en": "Updated At",
      }
  },
  "views.Header": {
    "admin": {
      "en": "Admin Console",
      },
    "accessHeader": {
      "en": "Access Password",
      },
    "accessTip": {
      "en": "Please enter the correct access password",
      },
    "dark": {
      "en": "Dark",
      },
    "mailbox": {
      "en": "Mailbox",
      },
    "light": {
      "en": "Light",
      },
    "menu": {
      "en": "Menu",
      },
    "ok": {
      "en": "OK",
      },
    "status": {
      "en": "Status",
      },
    "title": {
      "en": "Cloudflare Temp Email",
      },
    "userCenter": {
      "en": "User Center",
      }
  },
  "views.user.BindAddress": {
    "logout": {
      "en": "Logout",
      }
  },
  "views.Admin": {
    "about": {
      "en": "About",
      },
    "accessHeader": {
      "en": "Admin Password",
      },
    "accessTip": {
      "en": "Please enter the admin password",
      },
    "mailbox_management": {
      "en": "Mailbox Management",
      },
    "mailbox_list": {
      "en": "Mailboxes",
      },
    "mailbox_create": {
      "en": "Create Email Address",
      },
    "mailbox_settings": {
      "en": "Global Mailbox Settings",
      },
    "adminAccount": {
      "en": "Admin",
      },
    "aiExtractSettings": {
      "en": "AI Extract Settings",
      },
    "appearance": {
      "en": "Appearance",
      },
    "confirm": {
      "en": "Confirm",
      },
    "database": {
      "en": "Database",
      },
    "ipBlacklistSettings": {
      "en": "IP Blacklist",
      },
    "loginMethod": {
      "en": "Login Method",
      },
    "loginViaDisabledCheck": {
      "en": "Disabled Password Check",
      },
    "loginViaPassword": {
      "en": "Admin Password Login",
      },
    "loginViaUserAdmin": {
      "en": "User Account (Admin Role)",
      },
    "logout": {
      "en": "Logout",
      },
    "logoutConfirmContent": {
      "en": "Are you sure you want to log out of the admin console?",
      },
    "logoutConfirmTitle": {
      "en": "Confirm Logout",
      },
    "logoutSuccess": {
      "en": "Logout successful",
      },
    "mailWebhook": {
      "en": "Mail Webhook",
      },
    "mails": {
      "en": "Emails",
      },
    "maintenance": {
      "en": "Maintenance",
      },
    "ok": {
      "en": "OK",
      },
    "qucickSetup": {
      "en": "Quick Setup",
      },
    "redeemCodes": {
      "en": "Redemption Codes",
      },
    "roleAddressConfig": {
      "en": "Role Address Config",
      },
    "sendBox": {
      "en": "Sent",
      },
    "sendMail": {
      "en": "Send Mail",
      },
    "senderAccess": {
      "en": "Sender Access Control",
      },
    "statistics": {
      "en": "Statistics",
      },
    "telegram": {
      "en": "Telegram Bot",
      },
    "unknow": {
      "en": "Mails with unknow receiver",
      },
    "user": {
      "en": "User",
      },
    "userOauth2Settings": {
      "en": "Oauth2 Settings",
      },
    "user_management": {
      "en": "User Management",
      },
    "user_settings": {
      "en": "User Settings",
      },
    "webhookSettings": {
      "en": "Webhook Settings",
      },
    "workerconfig": {
      "en": "Worker Config",
      }
  },
  "views.admin.RedeemCodes": {
    "actions": {
      "en": "Actions",
      },
    "amount": {
      "en": "Sending credits",
      },
    "batchCreate": {
      "en": "Batch Generate",
      },
    "countLimit": {
      "en": "Generate 1-{max} codes at a time.",
      },
    "createdResult": {
      "en": "Redemption codes generated: {created}.",
      },
    "copy": {
      "en": "Copy",
      },
    "copied": {
      "en": "Redemption code copied",
      },
    "copyFailed": {
      "en": "Unable to copy the redemption code",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteConfirm": {
      "en": "Delete this redemption code?",
      },
    "downloadCsv": {
      "en": "Download CSV",
      },
    "edit": {
      "en": "Edit",
      },
    "emptyPrefix": {
      "en": "No prefix",
      },
    "emptyPrefixTip": {
      "en": "Leave empty to redeem a mailbox without a prefix",
      },
    "enabled": {
      "en": "Enabled",
      },
    "expiresAt": {
      "en": "Expires at",
      },
    "expired": {
      "en": "Expired",
      },
    "export": {
      "en": "Export",
      },
    "exportLimit": {
      "en": "Export rows (maximum {max})",
      },
    "generationCount": {
      "en": "Number to generate",
      },
    "generate": {
      "en": "Generate",
      },
    "invalidExpiration": {
      "en": "Select a future expiration time",
      },
    "invalidPrefix": {
      "en": "Use only letters and digits, up to {max} characters. Leave empty for no prefix.",
      },
    "roleRequired": {
      "en": "Select a role",
      },
    "code": {
      "en": "Redemption code",
      },
    "no": {
      "en": "No",
      },
    "prefix": {
      "en": "Address prefix",
      },
    "redeemedAt": {
      "en": "Redeemed at",
      },
    "redeemedUser": {
      "en": "Recipient account",
      },
    "resultAddress": {
      "en": "Redeemed mailbox",
      },
    "role": {
      "en": "Role",
      },
    "save": {
      "en": "Save",
      },
    "saved": {
      "en": "Saved",
      },
    "search": {
      "en": "Search",
      },
    "searchPlaceholder": {
      "en": "Search redemption code",
      },
    "targetAddress": {
      "en": "Recipient mailbox",
      },
    "type": {
      "en": "Type",
      },
    "typeFilter": {
      "en": "Redemption code type",
      },
    "typeAddress": {
      "en": "Custom mailbox",
      },
    "typeBalance": {
      "en": "Sending credits",
      },
    "typeRole": {
      "en": "Role benefits",
      },
    "valid": {
      "en": "Active",
      },
    "yes": {
      "en": "Yes",
      }
  },
  "views.User": {
    "address_management": {
      "en": "Mailbox Management",
      },
    "bind_address": {
      "en": "Link Email Address",
      },
    "send_mail": {
      "en": "Send Mail",
      },
    "user_mail_box_tab": {
      "en": "Inbox",
      },
    "user_settings": {
      "en": "User Settings",
      }
  },
  "views.user.UserSendBox": {
    "noAddress": {
      "en": "Select a bound email address to continue",
      },
    "sendbox": {
      "en": "Sent",
      }
  },
  "views.user.UserLogin": {
    "cannotForgotPassword": {
      "en": "Mail verification is disabled or register is disabled, cannot reset password, please contact administrator",
      },
    "email": {
      "en": "Account Email",
      },
    "forgotPassword": {
      "en": "Forgot Password",
      },
    "login": {
      "en": "Login",
      },
    "loginWith": {
      "en": "Login with {provider}",
      },
    "loginWithPasskey": {
      "en": "Login with Passkey",
      },
    "password": {
      "en": "Password",
      },
    "pleaseCompleteTurnstile": {
      "en": "Please complete turnstile",
      },
    "pleaseInput": {
      "en": "Please enter the account email and password",
      },
    "pleaseInputCode": {
      "en": "Please input code",
      },
    "pleaseInputEmail": {
      "en": "Please enter the account email",
      },
    "pleaseLogin": {
      "en": "Please login",
      },
    "register": {
      "en": "Register",
      },
    "resetPassword": {
      "en": "Reset Password",
      },
    "sendVerificationCode": {
      "en": "Send Verification Code",
      },
    "verifyCode": {
      "en": "Verification Code",
      },
    "verifyCodeSent": {
      "en": "Verification Code Sent, expires in {timeout} seconds",
      },
    "waitforVerifyCode": {
      "en": "Wait for {timeout} seconds",
      }
  },
  "views.user.UserBar": {
    "currentUser": {
      "en": "Current User",
      },
    "fetchUserSettingsError": {
      "en": "Login password is invalid or account not exist, it may be network connection issue, please try again later.",
      }
  },
  "views.user.AddressManagement": {
    "expires_at": {
      "en": "Expires At",
      },
    "neverExpires": {
      "en": "Never",
      },
    "unbindPasswordTip": {
      "en": "Save the mailbox password before unlinking so you can log in again.",
      },
    "actions": {
      "en": "Actions",
      },
    "addressQueryTip": {
      "en": "Leave blank to query all email addresses",
      },
    "address": {
      "en": "Mailboxes",
      },
    "openMailbox": {
      "en": "Open Mailbox",
      },
    "query": {
      "en": "Query",
      },
    "create_or_bind": {
      "en": "Add Mailbox",
      },
    "mail_count": {
      "en": "Mail Count",
      },
    "itemCount": {
      "en": "Total",
      },
    "invalidQuery": {
      "en": "Search term must be at most 100 characters and cannot contain % or _",
      },
    "emailAddress": {
      "en": "Email Address",
      },
    "send_count": {
      "en": "Send Count",
      },
    "success": {
      "en": "success",
      },
    "targetUserEmail": {
      "en": "Target User Email",
      },
    "transferAddress": {
      "en": "Transfer Mailbox",
      },
    "transferAddressTip": {
      "en": "Transfer address to another user will remove the address from your account and transfer it to another user. Are you sure to transfer the address?",
      },
    "unbindAddress": {
      "en": "Unlink Mailbox",
      },
    "unbindAddressTip": {
      "en": "Before unbinding, please switch to this email address and save the email address credential.",
      }
  },
  "views.index.AccountSettings": {
    "changePassword": {
      "en": "Change Mailbox Password",
      },
    "clearInbox": {
      "en": "Clear Inbox",
      },
    "clearInboxConfirm": {
      "en": "Are you sure to clear all emails in your inbox?",
      },
    "clearSentItems": {
      "en": "Clear Sent Items",
      },
    "clearSentItemsConfirm": {
      "en": "Are you sure to clear all emails in your sent items?",
      },
    "confirmPassword": {
      "en": "Confirm Password",
      },
    "deleteMailbox": {
      "en": "Delete Mailbox",
      },
    "deleteAccountConfirm": {
      "en": "Are you sure you want to delete this email address and all of its emails? This does not delete your user account.",
      },
    "logout": {
      "en": "Log Out of Mailbox",
      },
    "logoutConfirm": {
      "en": "Are you sure you want to log out of the current email address?",
      },
    "newPassword": {
      "en": "New Password",
      },
    "passwordChanged": {
      "en": "Password changed successfully",
      },
    "passwordMismatch": {
      "en": "Passwords do not match",
      },
    "showAddressCredential": {
      "en": "Credentials & Connection Methods",
      },
    "showSessionToken": {
      "en": "View Session Token",
      },
    "success": {
      "en": "Success",
      }
  },
  "views.user.UserOauth2Callback": {
    "codeNotFound": {
      "en": "code not found",
      },
    "logging": {
      "en": "Logging in...",
      },
    "stateNotMatch": {
      "en": "state not match",
      }
  },
  "views.index.Attachment": {
    "action": {
      "en": "Action",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteConfirm": {
      "en": "Are you sure to delete this attachment?",
      },
    "deleteSuccess": {
      "en": "Deleted successfully",
      },
    "download": {
      "en": "Download",
      }
  },
  "views.index.AutoReply": {
    "autoReply": {
      "en": "Auto Reply",
      },
    "enableAutoReply": {
      "en": "Enable Auto Reply",
      },
    "name": {
      "en": "Name",
      },
    "save": {
      "en": "Save",
      },
    "settings": {
      "en": "Settings",
      },
    "sourcePrefix": {
      "en": "Sender Filter",
      },
    "sourcePrefixPlaceholder": {
      "en": "Empty=all, prefix match, or /regex/",
      },
    "subject": {
      "en": "Subject",
      },
    "success": {
      "en": "Success",
      }
  },
  "views.index.SendMail": {
    "balanceUnavailable": {
      "en": "No send balance for this address",
      },
    "composeMail": {
      "en": "Compose email",
      },
    "content": {
      "en": "Content",
      },
    "contentEmpty": {
      "en": "Content is empty",
      },
    "contentPlaceholder": {
      "en": "Write your message...",
      },
    "draftSaved": {
      "en": "Draft saved in this browser",
      },
    "edit": {
      "en": "Edit",
      },
    "fromName": {
      "en": "Your Name and Address, leave Name blank to use email address",
      },
    "html": {
      "en": "HTML",
      },
    "options": {
      "en": "Options",
      },
    "preview": {
      "en": "Preview",
      },
    "requestAccess": {
      "en": "Request send access",
      },
    "requestAccessTip": {
      "en": "Send permission and balance are managed separately for each email address. The current address, {address}, has no available balance. Request permission for this address or contact the admin.",
      },
    "requestSuccess": {
      "en": "Send permission requested for the current address",
      },
    "recipientAddress": {
      "en": "Recipient address",
      },
    "recipientName": {
      "en": "Recipient name (optional)",
      },
    "rich text": {
      "en": "Rich Text",
      },
    "send": {
      "en": "Send",
      },
    "send_balance": {
      "en": "Current Address Send Balance",
      },
    "senderAddress": {
      "en": "Sender address",
      },
    "senderName": {
      "en": "Sender name (optional)",
      },
    "subject": {
      "en": "Subject",
      },
    "subjectEmpty": {
      "en": "Subject is empty",
      },
    "successSend": {
      "en": "Please check your sendbox. If failed, please check your balance or try again later.",
      },
    "text": {
      "en": "Text",
      },
    "toMailEmpty": {
      "en": "Recipient address is empty",
      },
    "toName": {
      "en": "Recipient Name and Address, leave Name blank to use email address",
      },
    "tooLarge": {
      "en": "Too large file, please upload file less than 1MB.",
      }
  },
  "views.index.SimpleIndex": {
    "mailboxSettings": {
      "en": "Mailbox Settings",
      },
    "addressCopied": {
      "en": "Address copied successfully",
      },
    "addressCredential": {
      "en": "Mail Address Credential",
      },
    "addressCredentialTip": {
      "en": "Please copy the Mail Address Credential and you can use it to login",
      },
    "copyAddress": {
      "en": "Copy",
      },
    "deleteSuccess": {
      "en": "Mail deleted successfully",
      },
    "exitSimpleIndex": {
      "en": "Exit Simple",
      },
    "mailCount": {
      "en": "{current} / {total} emails",
      },
    "nextPage": {
      "en": "Next",
      },
    "noMails": {
      "en": "No mails found",
      },
    "prevPage": {
      "en": "Previous",
      },
    "readStatusUpdated": {
      "en": "Read status updated",
      },
    "refreshAfter": {
      "en": "Refresh After {msg} Seconds",
      },
    "refreshMails": {
      "en": "Refresh",
      },
    "refreshSuccess": {
      "en": "Mails refreshed successfully",
      }
  },
  "views.index.TelegramAddress": {
    "actions": {
      "en": "Actions",
      },
    "address": {
      "en": "Address",
      },
    "bind": {
      "en": "Bind",
      },
    "bindAddressSuccess": {
      "en": "Bind Address Success",
      },
    "changeMailAddress": {
      "en": "Change Mail Address",
      },
    "success": {
      "en": "success",
      },
    "unbindMailAddress": {
      "en": "Unbind Mail Address",
      }
  },
  "views.index.AddressBar": {
    "addressCredential": {
      "en": "Mail Address Credential",
      },
    "addressCredentialTip": {
      "en": "Please copy the Mail Address Credential and you can use it to login to your email account.",
      },
    "addressManage": {
      "en": "Mailbox Management",
      },
    "addressPassword": {
      "en": "Mailbox Password",
      },
    "fetchAddressError": {
      "en": "Mail address credential is invalid or account not exist, it may be network connection issue, please try again later.",
      },
    "linkWithAddressCredential": {
      "en": "Open to auto login email link",
      },
    "ok": {
      "en": "OK",
      },
    "userCenter": {
      "en": "User Center",
      }
  },
  "views.admin.SendBox": {
    "query": {
      "en": "Query",
      },
    "queryTip": {
      "en": "Please input address to query, leave blank to query all",
      }
  },
  "views.admin.AiExtractSettings": {
    "allowList": {
      "en": "Address Allowlist (Enter address and press Enter, wildcards supported)",
      },
    "allowListTip": {
      "en": "Wildcard * matches any characters, e.g. *{'@'}example.com matches all addresses under example.com domain",
      },
    "disabledTip": {
      "en": "When disabled, AI extraction will process all email addresses",
      },
    "enableAllowList": {
      "en": "Enable Address Allowlist",
      },
    "enableAllowListTip": {
      "en": "When enabled, AI extraction will only process emails sent to addresses in the allowlist",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Success",
      },
    "title": {
      "en": "AI Email Extraction Settings",
      }
  },
  "views.admin.SendMail": {
    "adminComposeTip": {
      "en": "Send from a configured email address",
      },
    "composeMail": {
      "en": "Compose email",
      },
    "content": {
      "en": "Content",
      },
    "contentEmpty": {
      "en": "Content is empty",
      },
    "contentPlaceholder": {
      "en": "Write your message...",
      },
    "draftSaved": {
      "en": "Draft saved in this browser",
      },
    "edit": {
      "en": "Edit",
      },
    "fromMailEmpty": {
      "en": "Sender address is empty",
      },
    "fromName": {
      "en": "Your Name and Address, leave Name blank to use email address",
      },
    "html": {
      "en": "HTML",
      },
    "options": {
      "en": "Options",
      },
    "preview": {
      "en": "Preview",
      },
    "recipientAddress": {
      "en": "Recipient address",
      },
    "recipientName": {
      "en": "Recipient name (optional)",
      },
    "rich text": {
      "en": "Rich Text",
      },
    "send": {
      "en": "Send",
      },
    "senderAddress": {
      "en": "Sender address",
      },
    "senderName": {
      "en": "Sender name (optional)",
      },
    "subject": {
      "en": "Subject",
      },
    "subjectEmpty": {
      "en": "Subject is empty",
      },
    "successSend": {
      "en": "Please check your sendbox. If failed, please try again later.",
      },
    "text": {
      "en": "Text",
      },
    "toMailEmpty": {
      "en": "Recipient address is empty",
      },
    "toName": {
      "en": "Recipient Name and Address, leave Name blank to use email address",
      },
    "tooLarge": {
      "en": "Too large file, please upload file less than 1MB.",
      }
  },
  "views.admin.Account": {
    "expires_at": {
      "en": "Expires At",
      },
    "neverExpires": {
      "en": "Never",
      },
    "actions": {
      "en": "Actions",
      },
    "addressCredential": {
      "en": "Mail Address Credential",
      },
    "addressCredentialTip": {
      "en": "Please copy the Mail Address Credential and you can use it to login to your email account.",
      },
    "addressQueryTip": {
      "en": "Leave blank to query all email addresses",
      },
    "clearInbox": {
      "en": "Clear Inbox",
      },
    "clearInboxTip": {
      "en": "Are you sure to clear inbox for this email?",
      },
    "clearSentItems": {
      "en": "Clear Sent Items",
      },
    "clearSentItemsTip": {
      "en": "Are you sure to clear sent items for this email?",
      },
    "created_at": {
      "en": "Created At",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteMailbox": {
      "en": "Delete Mailbox",
      },
    "deleteTip": {
      "en": "Are you sure you want to delete this mailbox?",
      },
    "itemCount": {
      "en": "itemCount",
      },
    "mail_count": {
      "en": "Mail Count",
      },
    "multiClearInbox": {
      "en": "Multi Clear Inbox",
      },
    "multiClearInboxTip": {
      "en": "Are you sure to clear inbox for selected addresses?",
      },
    "multiClearSentItems": {
      "en": "Multi Clear Sent Items",
      },
    "multiClearSentItemsTip": {
      "en": "Are you sure to clear sent items for selected addresses?",
      },
    "multiDelete": {
      "en": "Multi Delete",
      },
    "multiDeleteTip": {
      "en": "Are you sure to delete selected addresses?",
      },
    "emailAddress": {
      "en": "Email Address",
      },
    "newPassword": {
      "en": "New Password",
      },
    "passwordResetSuccess": {
      "en": "Password reset successfully",
      },
    "pleaseSelectAddress": {
      "en": "Please select a mailbox",
      },
    "query": {
      "en": "Query",
      },
    "resetPassword": {
      "en": "Reset Password",
      },
    "selectAll": {
      "en": "Select All of This Page",
      },
    "selectedItems": {
      "en": "Selected",
      },
    "send_count": {
      "en": "Send Count",
      },
    "showCredential": {
      "en": "Show Mail Address Credential",
      },
    "source_meta": {
      "en": "Source",
      },
    "success": {
      "en": "Success",
      },
    "unselectAll": {
      "en": "Unselect All",
      },
    "updated_at": {
      "en": "Update At",
      },
    "viewMails": {
      "en": "View Mails",
      },
    "viewSendBox": {
      "en": "View SendBox",
      }
  },
  "views.admin.UserOauth2Settings": {
    "addOauth2": {
      "en": "Add Oauth2",
      },
    "delete": {
      "en": "Delete",
      },
    "enable": {
      "en": "Enable",
      },
    "enableEmailFormat": {
      "en": "Enable Email Format",
      },
    "enableMailAllowList": {
      "en": "Enable Mail Address Allow List(Manually enterable)",
      },
    "icon": {
      "en": "Icon (SVG, please ensure trusted source)",
      },
    "iconPreview": {
      "en": "Preview",
      },
    "mailAllowList": {
      "en": "Mail Address Allow List",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "name": {
      "en": "Name",
      },
    "oauth2Type": {
      "en": "Oauth2 Type",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Save Success",
      },
    "tip": {
      "en": "Third-party login will automatically use the user's email to register an account (the same email will be regarded as the same account), this account is the same as the registered account, and you can also set the password through the forget password",
      },
    "userEmailFormat": {
      "en": "Email Regex Pattern",
      },
    "userEmailFormatTip": {
      "en": "Use regex to transform email. Example: ^(.+)@old\\.com$ with $1@new.com",
      },
    "userEmailReplace": {
      "en": "Replace Template",
      }
  },
  "views.admin.Statistics": {
    "refresh": { "en": "Refresh", },
    "dateRange": { "en": "Time range", },
    "days7": { "en": "Last 7 days", },
    "days30": { "en": "Last 30 days", },
    "today": { "en": "Today", },
    "rangeLimit": { "en": "Select a range of up to 30 days.", },
    "rangeHelp": { "en": "Up to 30 days", },
    "applyRange": { "en": "Apply", },
    "received": { "en": "Incoming mail", },
    "newAddresses": { "en": "Mailboxes created", },
    "sent": { "en": "Outgoing mail", },
    "newUsers": { "en": "User registrations", },
    "chartLabel": { "en": "{title}: {count}", },
    "loadError": { "en": "Could not load statistics. Try refreshing.", },
    "activeAddressCount7days": { "en": "Active mailboxes (7 days)", },
    "activeAddressCount30days": { "en": "Active mailboxes (30 days)", },
    "activeUserCount7days": { "en": "Active users (7 days)", },
    "activeUserCount30days": { "en": "Active users (30 days)", },
    "addressCount": {
      "en": "Total mailboxes",
      },
    "mailCount": {
      "en": "Total mail",
      },
    "sendMailCount": {
      "en": "Total sent",
      },
    "userCount": {
      "en": "Total users",
      }
  },
  "views.admin.SenderAccess": {
    "action": {
      "en": "Action",
      },
    "address": {
      "en": "Email Address",
      },
    "balance": {
      "en": "Balance",
      },
    "created_at": {
      "en": "Created At",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteTip": {
      "en": "Are you sure to delete this?",
      },
    "disable": {
      "en": "Disable",
      },
    "enable": {
      "en": "Enable",
      },
    "is_enabled": {
      "en": "Is Enabled",
      },
    "itemCount": {
      "en": "itemCount",
      },
    "modalTip": {
      "en": "Please input the sender balance",
      },
    "modify": {
      "en": "Modify",
      },
    "ok": {
      "en": "OK",
      },
    "query": {
      "en": "Query",
      },
    "success": {
      "en": "Success",
      }
  },
  "views.index.LocalAddress": {
    "loginMethod": {
      "en": "Login Method",
      },
    "actions": {
      "en": "Actions",
      },
    "address": {
      "en": "Address",
      },
    "bindAddressSuccess": {
      "en": "Bind Address Success",
      },
    "changeMailAddress": {
      "en": "Change Mail Address",
      },
    "create_or_bind": {
      "en": "Create or Bind",
      },
    "success": {
      "en": "success",
      },
    "tip": {
      "en": "These addresses are stored in your browser, maybe loss if you clear the browser cache.",
      },
    "unbindMailAddress": {
      "en": "Unbind Mail Address credential",
      }
  },
  "views.admin.DatabaseManager": {
    "code_db_version": {
      "en": "Code Needed DB Version",
      },
    "current_db_version": {
      "en": "Current DB Version",
      },
    "current_database_size": {
      "en": "Current Database Size",
      },
    "free_plan": {
      "en": "Free",
      },
    "init": {
      "en": "Initialize Database",
      },
    "initializationSuccess": {
      "en": "Database initialized successfully",
      },
    "migration": {
      "en": "Migrate Database",
      },
    "migrationSuccess": {
      "en": "Database migrated successfully",
      },
    "need_initialization_tip": {
      "en": "Database initialization is required. Please initialize the database.",
      },
    "need_migration_tip": {
      "en": "Database migration is required. Please migrate the database.",
      },
    "paid_plan": {
      "en": "Workers Paid",
      },
    "plan": {
      "en": "Workers Plan",
      },
    "plan_placeholder": {
      "en": "Select your Cloudflare Workers plan",
      },
    "planSaved": {
      "en": "Workers plan saved",
      },
    "single_database_limit": {
      "en": "Database Capacity Limit",
      },
    "storage_description": {
      "en": "Compare the current database size with your plan limits.",
      },
    "storage_tip": {
      "en": "Usage is calculated from the current database size and the selected plan limit.",
      },
    "storage_title": {
      "en": "D1 Storage Capacity",
      },
    "storage_usage": {
      "en": "Capacity Usage",
      },
    "unavailable": {
      "en": "Unavailable",
      }
  },
  "views.admin.IpBlacklistSettings": {
    "asn_blacklist": {
      "en": "ASN Organization Blacklist",
      },
    "asn_blacklist_placeholder": {
      "en": "Enter ASN organization (e.g., Google, Amazon)",
      },
    "daily_request_limit": {
      "en": "Daily Request Limit",
      },
    "daily_request_limit_placeholder": {
      "en": "Enter limit (e.g., 1000)",
      },
    "enable_daily_limit": {
      "en": "Enable Daily Request Limit",
      },
    "enable_daily_limit_tip": {
      "en": "Limit the number of API requests per IP address per day",
      },
    "enable_ip_blacklist": {
      "en": "Enable IP Blacklist",
      },
    "enable_ip_whitelist": {
      "en": "Enable IP Whitelist (Strict)",
      },
    "enable_tip": {
      "en": "Block IPs matching blacklist patterns from accessing rate-limited APIs",
      },
    "enable_whitelist_tip": {
      "en": "Strict mode: ONLY IPs matching the whitelist can access rate-limited APIs. All other IPs will be denied.",
      },
    "fingerprint_blacklist": {
      "en": "Browser Fingerprint Blacklist",
      },
    "fingerprint_blacklist_placeholder": {
      "en": "Enter fingerprint ID (e.g., a1b2c3d4e5f6g7h8)",
      },
    "ip_blacklist": {
      "en": "IP Blacklist Patterns",
      },
    "ip_blacklist_placeholder": {
      "en": "Enter pattern (e.g., 192.168.1 or ^10\\.0\\.0\\.5$)",
      },
    "ip_whitelist": {
      "en": "IP Whitelist Patterns",
      },
    "ip_whitelist_placeholder": {
      "en": "Exact IP (e.g., 1.2.3.4) or anchored regex (e.g., ^192\\.168\\.1\\.\\d+$)",
      },
    "manualInputPrompt": {
      "en": "Type pattern and press Enter to add",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Save Success",
      },
    "tip_asn": {
      "en": "ASN Organization: Block by ISP/provider. Case-insensitive text matching or regex.",
      },
    "tip_daily_limit": {
      "en": "Daily Limit: Restrict the maximum number of requests per IP address per day (1-1000000).",
      },
    "tip_fingerprint": {
      "en": "Browser Fingerprint: Block by browser fingerprint. Supports exact matching or regex patterns.",
      },
    "tip_ip": {
      "en": "IP Blacklist: Supports text matching (e.g., \"192.168.1\") or regex (e.g., \"^10\\.0\\.0\\.5$\").",
      },
    "tip_scope": {
      "en": "Applies to: Create Address, Send Mail, External Send Mail API, User Registration, Verify Code",
      },
    "tip_whitelist": {
      "en": "IP Whitelist: Strict allowlist — plain entries must be EXACT IP matches (no substring). Use anchored regex (^...$) for ranges. Whitelisted IPs skip blacklist checks.",
      },
    "title": {
      "en": "IP Blacklist Settings",
      },
    "whitelist_empty_warning": {
      "en": "IP whitelist is enabled but the list is empty. This is ignored by the server to prevent lockout. Please add at least one entry before enabling.",
      }
  },
  "views.admin.UserAddressManagement": {
    "mail_count": {
      "en": "Mail Count",
      },
    "emailAddress": {
      "en": "Email Address",
      },
    "send_count": {
      "en": "Send Count",
      },
    "success": {
      "en": "success",
      }
  },
  "views.admin.UserManagement": {
    "actions": {
      "en": "Actions",
      },
    "address_count": {
      "en": "Mailbox Count",
      },
    "changeRole": {
      "en": "Change Role",
      },
    "createUser": {
      "en": "Create User",
      },
    "created_at": {
      "en": "Created At",
      },
    "delete": {
      "en": "Delete",
      },
    "deleteUser": {
      "en": "Delete User",
      },
    "deleteUserTip": {
      "en": "Are you sure you want to delete this user?",
      },
    "domains": {
      "en": "Domains",
      },
    "email": {
      "en": "Account Email",
      },
    "itemCount": {
      "en": "itemCount",
      },
    "password": {
      "en": "Password",
      },
    "pleaseInput": {
      "en": "Please input complete information",
      },
    "prefix": {
      "en": "Prefix",
      },
    "query": {
      "en": "Query",
      },
    "resetPassword": {
      "en": "Reset Password",
      },
    "role": {
      "en": "Role",
      },
    "roleDonotExist": {
      "en": "Current Role does not exist",
      },
    "success": {
      "en": "Success",
      },
    "userAddressManagement": {
      "en": "Mailbox Management",
      },
    "user_email": {
      "en": "User Email",
      }
  },
  "views.admin.Telegram": {
    "enable": {
      "en": "Enable",
      },
    "enableGlobalMailPush": {
      "en": "Enable Global Mail Push(Manually input telegram Chat ID)",
      },
    "enableTelegramAllowList": {
      "en": "Enable Telegram Allow List(Manually input Chat ID)",
      },
    "globalMailPushList": {
      "en": "Global Mail Push Chat ID List",
      },
    "globalMailPushListTip": {
      "en": "Support chat_id of private chat/group/channel. You can send a message to your bot, then visit this link to see chat_id, https://api.telegram.org/bot<Replace with your BOT TOKEN>/getUpdates",
      },
    "init": {
      "en": "Init",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "miniAppUrl": {
      "en": "Telegram Mini App URL",
      },
    "save": {
      "en": "Save",
      },
    "status": {
      "en": "Check Status",
      },
    "successTip": {
      "en": "Success",
      },
    "telegramAllowList": {
      "en": "Telegram Allow List(Manually input telegram Chat ID)",
      }
  },
  "views.admin.BatchExportModal": {
    "title": {
      "en": "Export login links",
      },
    "spreadsheet": {
      "en": "Spreadsheet-safe CSV (Excel, Google Sheets)",
      },
    "spreadsheetTip": {
      "en": "Cells that start with =, +, -, {'@'}, tab or carriage return get a leading ' so spreadsheets keep them as text. Programs reading this file will see the ' as part of the value.",
      },
    "raw": {
      "en": "Lossless CSV (scripts and programs)",
      },
    "rawTip": {
      "en": "Standard CSV with the original addresses and login links unchanged. Do not open it in a spreadsheet if an address starts with =, +, - or {'@'}.",
      },
    "download": {
      "en": "Download CSV",
      },
    "close": {
      "en": "Close",
      }
  },
  "views.admin.BatchCreate": {
    "randomNameTip": { "en": "Mailbox names are generated randomly.", },
    "batchCount": {
      "en": "Batch count (1–100)",
      },
    "createBatch": {
      "en": "Create batch",
      },
    "batchValidation": {
      "en": "Choose a domain and an integer count from 1 to 100. Custom subdomains cannot be empty.",
      },
    "batchNameError": {
      "en": "The configured address normalization cannot produce a valid random name.",
      },
    "batchProgress": {
      "en": "Completed: {completed} / {requested}",
      },
    "batchStopped": {
      "en": "Batch stopped. Interrupted requests may have created a mailbox with an unknown outcome. Known successes can still be exported.",
      },
    "exportCsv": {
      "en": "Export CSV",
      },
    "clearResults": {
      "en": "Clear results",
      },
    "batchTotal": {
      "en": "Saved results: {count}",
      },
    "batchSecurity": {
      "en": "Anyone holding these links can access the mailboxes. Private deployments still require site-access credentials. Results stay in memory until you leave this view or clear them.",
      },
  },
  "views.admin.CreateAccount": {
    "expiresAt": {
      "en": "Expiration (Optional)",
      },
    "neverExpires": {
      "en": "Never expires",
      },
    "expiry1h": {
      "en": "1 hour",
      },
    "expiry24h": {
      "en": "24 hours",
      },
    "expiry3d": {
      "en": "3 days",
      },
    "expiry7d": {
      "en": "1 week",
      },
    "expiry30d": {
      "en": "30 days",
      },
    "expiryCustom": {
      "en": "Custom date & time (YYYY-MM-DD HH:mm:ss)",
      },
    "selectExpiryDateTime": {
      "en": "YYYY-MM-DD HH:mm:ss",
      },
    "invalidExpiryDateTime": {
      "en": "Please select a valid future expiration date & time",
      },
    "creationMode": { "en": "Creation mode", },
    "singleMode": { "en": "Single creation", },
    "batchMode": { "en": "Batch creation", },
    "domain": { "en": "Domain", },
    "address": {
      "en": "Email Address",
      },
    "addressCredential": {
      "en": "Mail Address Credential",
      },
    "addressCredentialTip": {
      "en": "Please copy the Mail Address Credential and you can use it to login to your email account.",
      },
    "addressPassword": {
      "en": "Mailbox Password",
      },
    "createEmailAddress": {
      "en": "Create Email Address",
      },
    "enableCustomSubdomain": {
      "en": "Use Custom Subdomain",
      },
    "enablePrefix": {
      "en": "If enable Prefix",
      },
    "enableRandomSubdomain": {
      "en": "Use Random Subdomain",
      },
    "fillInAllFields": {
      "en": "Please fill in all fields",
      },
    "generateName": {
      "en": "Generate Fake Name",
      },
    "linkWithAddressCredential": {
      "en": "Open to auto login email link",
      },
    "normalSubdomain": {
      "en": "Normal Domain",
      },
    "randomSubdomainTip": {
      "en": "When enabled, the created address will use a random subdomain. Recommended for receiving only. Requires a wildcard MX DNS record on the base domain — see the random subdomain docs.",
      },
    "successTip": {
      "en": "Success Created",
      }
  },
  "views.admin.UserSettings": {
    "emailCheckRegex": {
      "en": "Email Check Regex (e.g. ^[^.]+{'@'}.+$ to disallow dots before {'@'})",
      },
    "enable": {
      "en": "Enable",
      },
    "enableEmailCheckRegex": {
      "en": "Enable Email Check Regex",
      },
    "enableMailAllowList": {
      "en": "Enable Mail Address Allow List(Manually enterable)",
      },
    "enableMailVerify": {
      "en": "Enable Mail Verify (Send address must be an address in the system with a balance and can send mail normally)",
      },
    "enableUserRegister": {
      "en": "Allow User Register",
      },
    "mailAllowList": {
      "en": "Mail Address Allow List",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "maxAddressCount": {
      "en": "Maximum number of email addresses that can be binded (0 = Unlimited)",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Save Success",
      },
    "verifyMailSender": {
      "en": "Verify Mail Sender",
      }
  },
  "views.admin.RoleAddressConfig": {
    "maxAddressCount": {
      "en": "Max Address Count (0 = Unlimited)",
      },
    "noRolesAvailable": {
      "en": "No roles available in system config",
      },
    "notConfigured": {
      "en": "Not Configured (Use Global Settings)",
      },
    "role": {
      "en": "Role",
      },
    "roleConfigDesc": {
      "en": "Configure maximum address count for each user role. Role-based limits take priority over global settings. Set 0 for unlimited.",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Success",
      }
  },
  "views.common.Appearance": {
    "autoLoadRemoteImages": {
      "en": "Automatically load external images in mail body",
      },
    "autoRefreshInterval": {
      "en": "Auto Refresh Interval(Sec)",
      },
    "bottom": {
      "en": "bottom",
      },
    "globalTabplacement": {
      "en": "Global Tab Placement",
      },
    "left": {
      "en": "left",
      },
    "mailboxSplitSize": {
      "en": "Left list width in two-column mailbox view",
      },
    "mailListView": {
      "en": "Full-width mailbox list view",
      },
    "mailListPreviewLineClamp": {
      "en": "Body Preview Lines",
      },
    "off": {
      "en": "Off",
      },
    "preferShowTextMail": {
      "en": "Display text Mail by default",
      },
    "right": {
      "en": "right",
      },
    "top": {
      "en": "top",
      },
    "useIframeShowMail": {
      "en": "Use iframe Show HTML Mail",
      },
    "useSideMargin": {
      "en": "Turn on the side margins on the left and right sides of the page",
      },
    "useSimpleIndex": {
      "en": "Use Simple Index",
      },
    "useUTCDate": {
      "en": "Use UTC Date",
      }
  },
  "views.admin.AccountSettings": {
    "actions": {
      "en": "Actions",
      },
    "add": {
      "en": "Add",
      },
    "address_block_list": {
      "en": "Address Block Keywords for Users(Admin can skip)",
      },
    "address_block_list_placeholder": {
      "en": "Please enter the keywords you want to block",
      },
    "block_receive_unknow_address_email": {
      "en": "Block receive unknow address email",
      },
    "cancel": {
      "en": "Cancel",
      },
    "config": {
      "en": "Config",
      },
    "create_address_subdomain_match": {
      "en": "Allow Subdomain Suffix Match When Creating Address",
      },
    "create_address_subdomain_match_env_locked": {
      "en": "Worker env ENABLE_CREATE_ADDRESS_SUBDOMAIN_MATCH is currently false. The saved admin switch can be modified, but it will not take effect until env is enabled or removed.",
      },
    "create_address_subdomain_match_follow_env": {
      "en": "Follow Environment Variable",
      },
    "create_address_subdomain_match_follow_env_note": {
      "en": "Choosing \"Follow Environment Variable\" clears the admin override and returns to the unset state. The effective result is still controlled by the Worker env and the precedence rules.",
      },
    "create_address_subdomain_match_force_disable": {
      "en": "Force Disable",
      },
    "create_address_subdomain_match_force_enable": {
      "en": "Force Enable",
      },
    "create_address_subdomain_match_note": {
      "en": "RANDOM_SUBDOMAIN_DOMAINS already allows random or manual subdomains for listed base domains. This switch additionally allows API callers to specify subdomains under other allowed base domains.",
      },
    "create_address_subdomain_match_tip": {
      "en": "Only affects /api/new_address and /admin/new_address domain validation. Example: when enabled, foo.example.com can match configured base domain example.com.",
      },
    "delete_original": {
      "en": "Delete original after forwarding",
      },
    "delete_rule": {
      "en": "Delete",
      },
    "delete_rule_confirm": {
      "en": "Are you sure you want to delete this rule?",
      },
    "delete_success": {
      "en": "Delete Success",
      },
    "domain_list": {
      "en": "Domain List (Optional)",
      },
    "email_forwarding_config": {
      "en": "Email Forwarding Configuration",
      },
    "forward_address": {
      "en": "Forward Address",
      },
    "forward_address_required": {
      "en": "Forward address is required",
      },
    "forward_placeholder": {
      "en": "forward@example.com",
      },
    "forwarding_rule_warning": {
      "en": "Each rule will run independently. Forward address needs to be a verified address.",
      },
    "fromBlockList": {
      "en": "Block Keywords for receive email",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "match_all": {
      "en": "All",
      },
    "match_any": {
      "en": "Any",
      },
    "noLimitSendAddressList": {
      "en": "No Balance Limit Send Address List",
      },
    "regex_invalid": {
      "en": "Invalid regex pattern",
      },
    "regex_too_long": {
      "en": "Regex pattern too long (max 200 characters)",
      },
    "rule_index": {
      "en": "Rule",
      },
    "save": {
      "en": "Save",
      },
    "select_domain": {
      "en": "Select Domain",
      },
    "send_address_block_list": {
      "en": "Address Block Keywords for send email",
      },
    "send_mail_daily_limit": {
      "en": "Daily Limit",
      },
    "send_mail_daily_limit_invalid": {
      "en": "Daily limit must be an integer greater than or equal to -1",
      },
    "send_mail_limit": {
      "en": "Send Mail Limit",
      },
    "send_mail_limit_tip": {
      "en": "This applies to all send channels. Use -1 for unlimited and 0 to block sending.",
      },
    "send_mail_monthly_limit": {
      "en": "Monthly Limit",
      },
    "send_mail_monthly_limit_invalid": {
      "en": "Monthly limit must be an integer greater than or equal to -1",
      },
    "source_match_mode": {
      "en": "Match Mode",
      },
    "source_patterns": {
      "en": "Source Address Regex (Optional)",
      },
    "source_patterns_placeholder": {
      "en": "e.g. gmail.com",
      },
    "recipient_patterns": {
      "en": "Recipient Address Regex (Optional)",
      },
    "recipient_patterns_placeholder": {
      "en": "e.g. admin",
      },
    "source_patterns_tip": {
      "en": "Domain, sender regex and recipient regex filters must all match. Empty filters are ignored. Regex matching is case-insensitive and uses the full envelope address, not the message headers.",
      },
    "successTip": {
      "en": "Save Success",
      },
    "tip": {
      "en": "You can manually input the following multiple select input and enter",
      },
    "verified_address_list": {
      "en": "Verified Address List(Can send email by cf internal api)",
      }
  },
  "views.admin.Mails": {
    "addressQueryTip": {
      "en": "Leave blank to query all addresses",
      },
    "query": {
      "en": "Query",
      }
  },
  "views.admin.Maintenance": {
    "expiredAddressLabel": {
      "en": "Cleanup expired addresses",
      },
    "addCustomSql": {
      "en": "Add Custom SQL",
      },
    "addressCreateLabel": {
      "en": "Cleanup the address created before n days",
      },
    "autoCleanup": {
      "en": "Auto cleanup",
      },
    "basicCleanup": {
      "en": "Basic Cleanup",
      },
    "cleanupNow": {
      "en": "Cleanup now",
      },
    "cleanupSuccess": {
      "en": "Cleanup success",
      },
    "cronTip": {
      "en": "Enable cron cleanup, need to configure [crons] in worker, please refer to the document, setting 0 days means clear all",
      },
    "customSqlCleanup": {
      "en": "Custom SQL Cleanup",
      },
    "customSqlTip": {
      "en": "Add custom DELETE SQL statements for scheduled cleanup. Only single DELETE statement is allowed per entry.",
      },
    "deleteCustomSql": {
      "en": "Delete",
      },
    "emptyAddressLabel": {
      "en": "Cleanup the empty address before n days",
      },
    "inactiveAddressLabel": {
      "en": "Cleanup the inactive address before n days",
      },
    "mailBoxLabel": {
      "en": "Cleanup the inbox before n days",
      },
    "mailUnknowLabel": {
      "en": "Cleanup the unknow mail before n days",
      },
    "save": {
      "en": "Save",
      },
    "saveSuccess": {
      "en": "Save success",
      },
    "sendBoxLabel": {
      "en": "Cleanup the sendbox before n days",
      },
    "sqlName": {
      "en": "Name",
      },
    "sqlNamePlaceholder": {
      "en": "e.g. Clean old logs",
      },
    "sqlPlaceholder": {
      "en": "e.g. DELETE FROM raw_mails WHERE source GLOB '*{'@'}example.com' AND created_at < datetime('now', '-3 day')",
      },
    "sqlStatement": {
      "en": "SQL Statement (DELETE only)",
      },
    "tip": {
      "en": "Please input the days",
      },
    "unboundAddressLabel": {
      "en": "Cleanup the unbound address before n days",
      }
  },
  "views.common.Login": {
    "expiresAt": {
      "en": "Expiration (Optional)",
      },
    "neverExpires": {
      "en": "Never expires",
      },
    "expiry1h": {
      "en": "1 hour",
      },
    "expiry24h": {
      "en": "24 hours",
      },
    "expiry3d": {
      "en": "3 days",
      },
    "expiry7d": {
      "en": "1 week",
      },
    "expiry30d": {
      "en": "30 days",
      },
    "expiryCustom": {
      "en": "Custom date & time (YYYY-MM-DD HH:mm:ss)",
      },
    "selectExpiryDateTime": {
      "en": "YYYY-MM-DD HH:mm:ss",
      },
    "invalidExpiryDateTime": {
      "en": "Please select a valid future expiration date & time",
      },
    "autoGeneratedName": {
      "en": "Auto-generated name",
      },
    "bindUserAddressError": {
      "en": "Error when bind email address to user",
      },
    "bindUserInfo": {
      "en": "Logged in user, login without binding email or create new email address will bind to current user",
      },
    "credential": {
      "en": "Email Address Credential",
      },
    "credentialInput": {
      "en": "Please input the Mail Address Credential",
      },
    "credentialLogin": {
      "en": "Credential Login",
      },
    "email": {
      "en": "Email Address",
      },
    "emailPasswordRequired": {
      "en": "Email address and mailbox password are required",
      },
    "enableRandomSubdomain": {
      "en": "Use Random Subdomain",
      },
    "enableCustomSubdomain": {
      "en": "Use Custom Subdomain",
      },
    "generateName": {
      "en": "Generate Fake Name",
      },
    "getNewEmail": {
      "en": "Create Email Address",
      },
    "useRedeemCode": {
      "en": "Use Redemption Code",
      },
    "redeemEntryTip": {
      "en": "Use a redemption code to unlock advanced access.",
      },
    "normalSubdomain": {
      "en": "Normal Domain",
      },
    "getNewEmailTip1": {
      "en": "Please input the email you want to use. only allow: ",
      },
    "getNewEmailTip2": {
      "en": "Levaing it blank will generate a random email address.",
      },
    "getNewEmailTip3": {
      "en": "You can choose a domain from the dropdown list.",
      },
    "help": {
      "en": "Help",
      },
    "login": {
      "en": "Log In to Mailbox",
      },
    "loginAndBind": {
      "en": "Login and Bind",
      },
    "ok": {
      "en": "OK",
      },
    "password": {
      "en": "Mailbox Password",
      },
    "passwordLogin": {
      "en": "Password Login",
      },
    "pleaseGetNewEmail": {
      "en": "Please login or click \"Get New Email\" button to get a new email address",
      },
    "randomSubdomainTip": {
      "en": "When enabled, the created address will use a random subdomain. Recommended for receiving only. Requires a wildcard MX DNS record on the base domain — see the random subdomain docs.",
      }
  },
  "views.Redeem": {
    "address": {
      "en": "Email address",
      },
    "addressCredential": {
      "en": "Mailbox access credential",
      },
    "addressPassword": {
      "en": "Address password",
      },
    "addressSuccess": {
      "en": "Redemption complete. Keep the mailbox credentials below secure.",
      },
    "autoName": {
      "en": "Generated automatically",
      },
    "back": {
      "en": "Back to mailbox",
      },
    "balanceDescription": {
      "en": "Redeem {amount} sending credits for a mailbox.",
      },
    "balanceSuccess": {
      "en": "Added {amount} sending credits to {address}.",
      },
    "balanceTitle": {
      "en": "Sending credits",
      },
    "checkCode": {
      "en": "Look up code",
      },
    "codeLabel": {
      "en": "Redemption code",
      },
    "codePlaceholder": {
      "en": "Enter your code",
      },
    "categoryTitle": {
      "en": "Available benefits",
      },
    "confirmBalance": {
      "en": "Confirm redemption",
      },
    "confirmRole": {
      "en": "Confirm redemption",
      },
    "createAddress": {
      "en": "Redeem mailbox",
      },
    "customSubdomain": {
      "en": "Custom subdomain",
      },
    "expired": {
      "en": "Expired",
      },
    "getCode": {
      "en": "Get a redemption code",
      },
    "noPrefixDescription": {
      "en": "Redeem one mailbox without a prefix.",
      },
    "normalDomain": {
      "en": "Normal domain",
      },
    "openAddress": {
      "en": "Open mailbox",
      },
    "prefixDescription": {
      "en": "Redeem one mailbox beginning with {prefix}.",
      },
    "prefixTitle": {
      "en": "Custom mailbox",
      },
    "randomName": {
      "en": "Generate name",
      },
    "randomSubdomain": {
      "en": "Random subdomain",
      },
    "redeemAnother": {
      "en": "Redeem another code",
      },
    "redeemed": {
      "en": "Used",
      },
    "redeemNow": {
      "en": "Redeem now",
      },
    "roleDescription": {
      "en": "Grant the {role} benefits to a specified account.",
      },
    "roleSuccess": {
      "en": "The {role} benefits are now active for {email}.",
      },
    "roleTitle": {
      "en": "Role benefits",
      },
    "targetAddress": {
      "en": "Target email address",
      },
    "unused": {
      "en": "Unused",
      },
    "success": {
      "en": "Redemption complete",
      },
    "title": {
      "en": "Redeem benefits",
      },
    "userEmail": {
      "en": "Recipient account",
      },
    "viewResult": {
      "en": "View redemption result",
      },
    "userEmailPlaceholder": {
      "en": "Enter the account email",
      }
  },
  "views.admin.Webhook": {
    "enableAllowList": {
      "en": "Enable Allow List (Restrict webhook access to specific users)",
      },
    "manualInputPrompt": {
      "en": "Type and press Enter to add",
      },
    "notEnabled": {
      "en": "Webhook is not enabled",
      },
    "save": {
      "en": "Save",
      },
    "successTip": {
      "en": "Success",
      },
    "webhookAllowList": {
      "en": "Webhook Allow List(Enter the mail address that is allowed to use webhook and enter)",
      }
  },
  "views.common.AdminContact": {
    "adminContact": {
      "en": "If you need help, please contact the administrator ({msg})",
      }
  }
} as const

type MessageRegistry = typeof MESSAGE_REGISTRY

export type MessageNamespace = keyof MessageRegistry
export type MessageKey<N extends MessageNamespace> = keyof MessageRegistry[N]

export const getMessageSource = <N extends MessageNamespace>(
  namespace: N,
  key: MessageKey<N>,
  locale: 'en',
) => {
  return MESSAGE_REGISTRY[namespace]?.[key]?.[locale]
}
