export const getResetPasswordConfirmMessageTemplate = (name: string): string => {
  return `
    <p style="text-align:left">Hello, ${name}<br><br> Your password has been changed successfully.
    </p>
  `;
};
