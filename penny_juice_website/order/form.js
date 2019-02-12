function Validate(theForm)
{

if (theForm.Name.value == "")
{
alert("Please enter a value for the \"Name\" field.");
theForm.FirstName.focus();
return (false);
}

if (theForm.Email.value == "")
{
alert("Please enter a value for the \"Email\" field.");
theForm.LastName.focus();
return (false);
}
 
return (true);
}


function validNum(theForm)
{
  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyA.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyA.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyA.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyB.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyB.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyA.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyC.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyC.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyC.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyD.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyD.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyD.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyF.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyE.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyE.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyA.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyF.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyF.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyG.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyG.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyG.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyH.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyH.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyH.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyI.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyI.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyI.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyJ.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyJ.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyJ.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyK.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyK.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyK.focus();
    return (false);
  }

  var checkOK = "0123456789.,";
  var checkStr = theForm.qtyL.value;
  var allValid = true;
  var validGroups = true;
  var decPoints = 0;
  var allNum = "";
  for (i = 0;  i < checkStr.length;  i++)
  {
    ch = checkStr.charAt(i);
    for (j = 0;  j < checkOK.length;  j++)
      if (ch == checkOK.charAt(j))
        break;
    if (j == checkOK.length)
    {
      allValid = false;
      break;
    }
    if (ch == ".")
    {
      allNum += ".";
      decPoints++;
    }
    else if (ch == "," && decPoints != 0)
    {
      validGroups = false;
      break;
    }
    else if (ch != ",")
      allNum += ch;
  }
  if (!allValid)
  {
    alert("Please enter only digit characters in the \"Quantity\" field.");
    theForm.qtyL.focus();
    return (false);
  }

  if (decPoints > 1 || !validGroups)
  {
    alert("Please enter a valid number in the \"Quantity\" field.");
    theForm.qtyL.focus();
    return (false);
  }

calculate();
return (True);
}
