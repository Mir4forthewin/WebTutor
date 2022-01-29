using System;

namespace TriangleAreaPerimeter
{
    class Program
    {
        static void Main(string[] args)
        {
            int sideA_Galford = 0;
            int sideB_Galford = 0;
            int sideBase_Galford = 0;
            int height_Galford = 0;
            int trianglePerimeter_Galford = 0;
            double triangleArea_Galford = 0;

            Console.WriteLine("This program will compute the Area and Perimeter Triangle Lot");
            Console.WriteLine();
            Console.WriteLine();

            Console.WriteLine("Enter the side A of the lot");
            sideA_Galford = Convert.ToInt32( Console.ReadLine() );
            Console.WriteLine();

            Console.WriteLine("Enter the side B of the lot");
            sideB_Galford = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            Console.WriteLine("Enter the Base of the lot");
            sideBase_Galford = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();

            Console.WriteLine("Enter the Height of the lot");
            height_Galford = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine();


            trianglePerimeter_Galford = sideA_Galford + sideA_Galford + sideBase_Galford;
            triangleArea_Galford = 0.5 * sideBase_Galford * height_Galford;


            Console.Write("Triangle Perimeter is: ");
            Console.Write(trianglePerimeter_Galford);
            Console.WriteLine();
            Console.Write("Triangle Area is: ");
            Console.WriteLine(triangleArea_Galford);
            Console.WriteLine();
            Console.WriteLine();


            Console.WriteLine("Press any key to end the program.");
            Console.ReadKey();
        }
    }
}
