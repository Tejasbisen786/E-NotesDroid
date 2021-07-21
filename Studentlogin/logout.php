<?php
session_start();
$_SESSION['login']=="";

session_unset();
$_SESSION['action1']="You have logged out successfully..!";
?>
<script language="javascript">
document.location="http://localhost/Notesdroid%20Final/NotesDroid/Studentlogin/indexh.php";
</script>
