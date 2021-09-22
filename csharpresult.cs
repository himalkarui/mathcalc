using System;
using System.Data;

namespace turing
{

    class Developer
    {
        public int[] getAray(int length, int[] copyarray)
        {
            if (length > -1)
            {
                int[] arr = new int[length];
                if (copyarray != null)
                {
                    for (int i = 0; i < length; ++i)
                    {
                        if (i < copyarray.Length)
                            arr[i] = copyarray[i];
                    }
                }
                return arr;
            }
            else
            {
                return new int[0];
            }
        }


        public int SumofScore(string[] ops)
        {
            int sum = 0;
            int[] newScores = getAray(0, null);
            for (int i = 0; i < ops.Length; ++i)
            {
                if (Int32.TryParse(ops[i], out int j))
                {
                    newScores = getAray(newScores.Length + 1, newScores);
                    newScores[newScores.Length - 1] = j;
                }
                else if (ops[i] == "C")
                {
                    newScores = getAray(newScores.Length - 1, newScores);
                }
                else if (ops[i] == "D")
                {
                    newScores = getAray(newScores.Length + 1, newScores);
                    newScores[newScores.Length - 1] = newScores[newScores.Length - 2] * 2;
                }
                else if (ops[i] == "+")
                {
                    newScores = getAray(newScores.Length + 1, newScores);
                    newScores[newScores.Length - 1] = newScores[newScores.Length - 3] + newScores[newScores.Length - 2];
                }

                Console.WriteLine("newScores (" + i + ": " + newScores.ToString());
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

            string values = "5 2 C D + D D 5 6 C C C C C C C C C C";

            int output = new Developer().SumofScore(values.Split());

            Console.Write("output : " + output);

        }
    }
}
