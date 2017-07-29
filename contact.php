<?php
/* Set e-mail recipient */
$myemail  = "aknazmul@gmail.com";

/* Check all form inputs using check_input function */
$full_name = check_input($_POST['full_name']);
$phone = check_input($_POST['phone']);
$email    = check_input($_POST['email']); 
$product_code    = check_input($_POST['product_code']); 
$description = check_input($_POST['description']);
$subject = "You have new query";

/* If e-mail is not valid show error message */
/*if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $email))
{
    show_error("E-mail address not valid");
}*/

/* If URL is not valid set $website to empty */
/*if (!preg_match("/^(https?:\/\/+[\w\-]+\.[\w\-]+)/i", $website))
{
    $website = '';
}*/

/* Let's prepare the message for the e-mail */
$message = "Hello!

This order has been placed by:

Name: $full_name
Phone: $phone
E-mail: $email
Product Code: $product_code

Message:
$description

";

/* Send the message using mail() function */
mail($myemail, $subject, $message);

/* Redirect visitor to the thank you page */
header('Location: index.html');
exit();

/* Functions we used */
function check_input($data, $problem='')
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    if ($problem && strlen($data) == 0)
    {
        show_error($problem);
    }
    return $data;
}

function show_error($myError)
{
?>
    <html>
    <body>

    <b>Please correct the following error:</b><br />
    <?php echo $myError; ?>

    </body>
    </html>
<?php
exit();
}
?>



