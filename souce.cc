#include <iostream>
#include <cmath>
#include <fstream>
#include <string>

using namespace std;

int main(int argc, char *argv[])
{
    std::string protein;
    ifstream aa;
         aa.open("aa.txt");        //we are getting the data from the file (we assume that we have aa.txt file)
         aa>>protein;                //the sequence should be in one letter code (uppercase letters)
         aa.close();

    int ProtLength;                       //now we are getting protein length
    ProtLength = protein.length();

    char Asp = 'D';
    char Glu = 'E';
    char Cys = 'C';
    char Tyr = 'Y';
    char His = 'H';
    char Lys = 'K';
    char Arg = 'R';

    int AspNumber = 0;
    int GluNumber = 0;
    int CysNumber = 0;
    int TyrNumber = 0;
    int HisNumber = 0;
    int LysNumber = 0;
    int ArgNumber = 0;
    int i = 0;

    for ( i = 0; i <= protein.length() - 1; ++i) {
        if (protein[i] == Asp)
            ++AspNumber;

        if (protein[i] == Glu)
            ++GluNumber;

        if (protein[i] == Cys)
            ++CysNumber;

        if (protein[i] == Tyr)
            ++TyrNumber;

        if (protein[i] == His)
            ++HisNumber;

        if (protein[i] == Lys)
            ++LysNumber;

        if (protein[i] == Arg)
            ++ArgNumber;
    }

    double NQ = 0.0; //net charge in given pH

    double QN1=0;  //C-terminal charge
    double QN2=0;  //D charge
    double QN3=0;  //E charge
    double QN4=0;  //C charge
    double QN5=0;  //Y charge
    double QP1=0;  //H charge
    double QP2=0;  //NH2 charge
    double QP3=0;  //K charge
    double QP4=0;  //R charge

    double pH = 6.5;             //starting point pI = 6.5 - theoretically it should be 7, but
                                           //average protein pI is 6.5 so we increase the probability
    double pHprev = 0.0;         //of finding the solution
    double pHnext = 14.0;        //0-14 is possible pH range
    double E = 0.01;             //epsilon means precision [pI = pH ± E]
    double temp = 0.0;

    cout<<endl<<endl;

    for(;;) {
        // we are using pK values form Wikipedia as they give quite good approximation
        // if you want you can change it

        QN1=-1/(1+pow(10,(3.65-pH)));
        QN2=-AspNumber/(1+pow(10,(3.9-pH)));
        QN3=-GluNumber/(1+pow(10,(4.07-pH)));
        QN4=-CysNumber/(1+pow(10,(8.18-pH)));
        QN5=-TyrNumber/(1+pow(10,(10.46-pH)));
        QP1=HisNumber/(1+pow(10,(pH-6.04)));
        QP2=1/(1+pow(10,(pH-8.2)));
        QP3=LysNumber/(1+pow(10,(pH-10.54)));
        QP4=ArgNumber/(1+pow(10,(pH-12.48)));

        NQ=QN1+QN2+QN3+QN4+QN5+QP1+QP2+QP3+QP4;


        if (pH>=14.0) {
            cout<<"Something is wrong - pH is higher than 14"<<endl;
            break;
        }

        //%%%%%%%%%%%%%%%%%%%%%%%%%   BISECTION   %%%%%%%%%%%%%%%%%%%%%%%%

        if(NQ<0) {
            //we are out of range, thus the new pH value must be smaller
            temp = pH;
            pH = pH-((pH-pHprev)/2);
            pHnext = temp;
            cout<<"pH: "<<pH<<", \tpHnext: "<<pHnext<<endl;
        } else {

            //we used to small pH value, so we have to increase it
            temp = pH;
            pH = pH + ((pHnext-pH)/2);
            pHprev = temp;
            cout<<"pH: "<<pH<<",\tpHprev: "<<pHprev<<endl;
        }

        if ((pH-pHprev<E)&&(pHnext-pH<E)) {
            //terminal condition, finding isoelectric point with given precision
            break;
        }
    }

     ofstream outfile;                //we are writting results to outfile.txt
     outfile.open("outfile.txt");
     outfile << "Protein length: "<<ProtLength<<endl;
     outfile << "Number of Asp = "<<AspNumber<<endl;
     outfile << "Number of Glu = "<<GluNumber<<endl;
     outfile << "Number of Cys = "<<CysNumber<<endl;
     outfile << "Number of Tyr = "<<TyrNumber<<endl;
     outfile << "Number of His = "<<HisNumber<<endl;
     outfile << "Number of Lys = "<<LysNumber<<endl;
     outfile << "Number of Arg = "<<ArgNumber<<endl;
     outfile << "Protein isoelectric point: "<<pH<<endl;
     outfile.close();
     cout <<endl<< "Protein isoelectric point: "<<pH<<endl<<endl;

     system("PAUSE");

     return EXIT_SUCCESS;
}
