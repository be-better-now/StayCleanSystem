package com.stayclean.services;


import com.stayclean.entity.Role;
import com.stayclean.model.request.EmailDetail;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class EmailService {

    @Autowired
    private TemplateEngine templateEngine;

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(EmailDetail emailDetail) {
        try {
            //context cua thymeleaf
            Context context = new Context();
            context.setVariable("name", emailDetail.getUser().getMember().getName());
            context.setVariable("button", "Go to Sunside Koi Care");
            context.setVariable("link", emailDetail.getLink());

            String template = templateEngine.process("welcome-template", context);
            // Creating a simple mail message
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

            // Setting up necessary details
            mimeMessageHelper.setFrom("admin@gmail.com");
            mimeMessageHelper.setTo(emailDetail.getUser().getEmail());
            mimeMessageHelper.setText(template, true);
            mimeMessageHelper.setSubject(emailDetail.getSubject());
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            System.out.println("Error send email!!!");
        }
    }

    public void sendEmailBannedAccount(EmailDetail emailDetail) {
        try {
            //context cua thymeleaf
            Context context = new Context();
            if (emailDetail.getUser().getRole() == Role.MEMBER) {
                context.setVariable("name", emailDetail.getUser().getMember().getName());
                context.setVariable("button", "");
                context.setVariable("link", emailDetail.getLink());
            } else {
                context.setVariable("name", emailDetail.getUser().getLastName());
                context.setVariable("button", "");
                context.setVariable("link", emailDetail.getLink());
            }


            String template = templateEngine.process("bannedAccount.html", context);
            // Creating a simple mail message
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage);

            // Setting up necessary details
            mimeMessageHelper.setFrom("admin@gmail.com");
            mimeMessageHelper.setTo(emailDetail.getUser().getEmail());
            mimeMessageHelper.setText(template, true);
            mimeMessageHelper.setSubject(emailDetail.getSubject());
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            System.out.println("Error send email!!!");
        }
    }

}
