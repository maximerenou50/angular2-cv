import {Email} from 'meteor/email';
import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

Meteor.methods({
    sendEmail: function (from, subject, text) {
        process.env.MAIL_URL = 'smtp://noreply%40maximerenou50.com:******@auth.smtp.1and1.fr:465';

        check([from, subject, text], [String]);

        text = "From : "+ from + "\n\n" + text;

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        if (Meteor.isServer) {
            Email.send({
                to: 'noreply@maximerenou50.com',
                from: 'noreply@maximerenou50.com',
                subject: subject,
                text: text
            });
        }
    }
});