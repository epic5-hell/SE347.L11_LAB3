var number;
var flag = true;

function input() 
{
    do
    {
        number = prompt("Nhập số nguyên: ");
        number.trim();
    } while (number == null || number == "" || Number.isInteger(number));


    if (number < 2)
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
}

function output() 
{
    if (flag == true)
    {
        document.write(number + " là số nguyên tố <br/>");
    }
    else
    {
        document.write(number + " không phải là số nguyên tố <br/>");
    }
}

input();
output();