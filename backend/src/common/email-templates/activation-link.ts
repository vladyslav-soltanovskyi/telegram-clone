import { EmailActivation } from "@constants/index";

export const getActivationLink = (token: string) => (
  `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Verify Email</title>
  <meta name="viewport" content="width = 375, initial-scale = -1">
  <style>
    body {
      font-family: sans-serif;
    }
  </style>
</head>

<body style="background-color: #ffffff; font-size: 16px;">
  <p style="text-align:left">Hello!<br><br>Thanks for signing up! Please follow the link below to verify your email address and access all website functionality.
  </p>
  <p>
  <a target="_blank"href=${EmailActivation.ACTIVATE_URL}${token}>
    Verify Email
  </a>
  </p>
</body>
</html>
  `
)