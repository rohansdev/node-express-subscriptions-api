export const generateEmailTemplate = ({
  subscriptionName,
  renewalDate,
  planName,
  price,
  paymentMethod,
  accountSettingsLink,
  supportLink,
  daysLeft,
  userName,
}) => `
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6;">
    <table cellpadding="0" cellspacing="0" width="100%" border="0" style="background-color: #fff;">
        <tr>
            <td style="background-color: #4a90e2; text-align: center;">
                <p style="font-size: 54px; line-height: 54px; font-weight: 800;">SubscriptionsApp</p>
            </td>
        </tr>
        <tr>
            <td style="padding: 40px 30px;">
                <p style="font-size: 16px; margin-bottom: 25px;">Hello <strong style="color: #4a90e2">${userName},</strong></p>
                <p style="font-size: 16px; margin-bottom: 25px;">Your <strong>${subscriptionName}</strong> subscription is </p>
                <table cellpadding="15" cellspacing="0" border="0" width="100%">
                    <tr>
                        <td style="font-size: 16px; border-bottom: 1px solid #d0e3ff;">
                            <strong>Plan:</strong> ${planName}
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</div>
`;
