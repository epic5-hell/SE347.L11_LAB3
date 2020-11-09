var number = null;
var flag = true;


function myFunction() 
{
    var input = document.getElementById("input").value ;



    //{    do
        // if(input !=  "")
        //     var check = parseInt(input) ? true:false;

        // if (check == true)
        // {
        //     break;
        // }else{
        //     input = "";
        //     number = null;
        // }
        number = parseInt(input);
    //} while (number == null || number == "" || !Number.isInteger(number))


    if (number < 2 || number == null || !Number.isInteger(number))
    {
        flag = false;
    }
    else
    {
        for (var i = 2; i < number-1; i++)
        {
            if (number % i == 0)
            {
                flag = false;
                break;
            }
        }
    }

    if (flag == true)
    {
        document.write(input + " là số nguyên tố <br/>");
    }
    else if (flag == false || typeof number != "number")
    {
        document.write(input + " không phải là số nguyên tố <br/>");
    }
}