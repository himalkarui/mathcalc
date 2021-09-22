using System;
using System.Data;

namespace turing
{

    class Developer
    {

        public int[] getAray(int length)
        {
            return new int[length];
        }

        public int SumofScore(string[] ops)
        {
            int sum = 0;
            int[] newScores = getAray(ops.Length);

            for (int i = 0; i < ops.Length; ++i)
            {
                int[] previousarry = newScores.Clone() as int[];

                //  newScores = getAray(i + 1);

                if (Int32.TryParse(ops[i], out int j))
                {
                    newScores[i] = j;
                }
                else if (ops[i] == "C")
                {
                    newScores[1] = 0;
                }
                else if (ops[i] == "D")
                {
                    newScores[1] = newScores[0] * 2;
                }
                else if (ops[i] == "+")
                {
                    newScores[2] = newScores[0] + newScores[1];
                }

            }

            for (int j = 0; j < newScores.Length; ++j)
            {
                sum += newScores[j];
            }


            return sum;
        }


    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string values = "5 2 C D +";

            int output = new Developer().SumofScore(values.Split());

            Console.Write("output : " + output);

        }
    }
}
