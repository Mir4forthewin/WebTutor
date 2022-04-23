using System;

namespace Galford_Odd_Even_Number
{
    class Program
    {
        static void Main(string[] args)
        {
            //Variables to be used
            string userName = "zuper"; //username of program
            string password = "password";  //password of program
            int invalidInput = 0;
            string userNameEntry = "";
            string passwordEntry = "";
            ConsoleKeyInfo entry;
            int numberCount = 0;
            bool isNumber = false;
            int[] numberToConvert = new int[10];
            int numberToConvertIndex = 0;
            int enteredNumber;



            //Program Start
            Console.WriteLine("");
            Console.WriteLine("");
            Console.WriteLine("Odd and Even Number Identifying System");
            Console.WriteLine("");
            Console.WriteLine("");



            //This will check if username and password is correct and less than 3 tries
            while (invalidInput != 3 && (userName != userNameEntry || password != passwordEntry))
            {

                Console.WriteLine("Enter your UserName and Password");
                Console.Write("Username: ");
                userNameEntry = Console.ReadLine();
                Console.WriteLine("");
                Console.Write("Password: ");
                passwordEntry = Console.ReadLine();
                invalidInput = invalidInput + 1;
                Console.WriteLine("");
                Console.WriteLine("");


                //This will check if username and password is valid
                if (userName == userNameEntry && password == passwordEntry)
                {

                    //This will check if program will continue or not
                    while (true)
                    {



                        //This will check if entry is number or not, the entry count of numbers to be check
                        while (!isNumber)
                        {
                            Console.Write("How many number to be check? Press ENTER after entering a number. ");
                            isNumber = int.TryParse(Console.ReadLine(), out numberCount);

                            if (!isNumber)
                            {
                                Console.WriteLine();
                                Console.WriteLine("Entry is not a number.");
                                Console.WriteLine();
                                Console.WriteLine();
                            }
                            else
                            {
                                numberToConvert = new int[numberCount];
                                numberToConvertIndex = 0;
                            }
                        }

                        

                        //This will store the numbers to be check in the array 
                        while (numberToConvertIndex < numberCount)
                        {

                            //Reset switch for checking if next input is number
                            isNumber = false;

                            while (!isNumber)
                            {
                                Console.Write("Entry No.");
                                Console.Write(numberToConvertIndex + 1);
                                Console.Write(" ");
                                isNumber = int.TryParse(Console.ReadLine(), out enteredNumber);

                                if (!isNumber)
                                {
                                    Console.WriteLine();
                                    Console.WriteLine("Entry is not a number");
                                }
                                else
                                {
                                    numberToConvert[numberToConvertIndex] = enteredNumber;
                                    numberToConvertIndex = numberToConvertIndex + 1;
                                }
                            }
                        }

                        Console.WriteLine();
                        Console.WriteLine();
                        Console.WriteLine("Below is the result of the checking:");
                        Console.WriteLine();
                        numberToConvertIndex = 0;




                        //This will check if numbers that are stored is either Even or Odd
                        while (numberToConvertIndex < numberCount)
                        {
                            Console.Write("Entry No.");
                            Console.Write(numberToConvertIndex + 1);
                            Console.Write(" ");
                            Console.Write(numberToConvert[numberToConvertIndex]);
                            Console.Write(" -> ");

                            if (numberToConvert[numberToConvertIndex] % 2 == 0)
                            {
                                Console.WriteLine("EVEN");
                            }
                            else
                            {
                                Console.WriteLine("ODD");
                            }

                            numberToConvertIndex = numberToConvertIndex + 1;
                        }




                        //This will check if the user wants to continue using the program.
                        Console.WriteLine();
                        Console.WriteLine();
                        Console.Write("Do you want to exit the Program? ");
                        Console.Write("Y/N ");
                        entry = Console.ReadKey();
                        char decision = (char) entry.Key;

                        if (decision == 'Y' || decision == 'y')
                        {
                            Console.WriteLine("");
                            break;
                        }
                        else
                        {
                            //Restat program
                            isNumber = false;
                            int lineClear = 0;
                            while (lineClear < 5)
                            {
                                Console.WriteLine();
                                lineClear = lineClear + 1;
                            }                          
                        }
                    }
                }
                else //if username or password is invalid
                {
                    Console.Write("Invalid Username and Password");
                    Console.WriteLine("");
                    Console.WriteLine("");
                }
            }


            //When user will not continue the program
            Console.WriteLine("");
            Console.WriteLine("Program is Terminated");
            Console.WriteLine("Press any key to end the program.");
            Console.ReadKey();
        }
    }
}