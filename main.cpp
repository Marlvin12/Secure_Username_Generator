//Marlvin Goremusandu
#include <iostream>
#include <string>
 
using namespace std;

std::string secure_login_name() {
    cout << "**WELCOME TO JACKSON STATE UNIVERSITY LOGIN NAME GENERATOR**" << std::endl;

    string first_name, last_name, ID_Number;

    cout << "Enter your first name: ";
    cin >> first_name;
    string set1 = first_name.substr(0, 3);

    cout << "Enter your last name: ";
    cin >> last_name;
    string set2 = last_name.substr(0, 3);

    cout << "Enter your ID number: ";
    cin >> ID_Number;
    string set3 = ID_Number.substr(ID_Number.length() - 4);

    string secure_login_name = set1 + set2 + set3;

    return secure_login_name;
}

int main() {
    string login_name = secure_login_name();
    cout << "Generated secure login name: " << login_name << std::endl;

    return 0;
}

