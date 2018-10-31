class Parent():
    def __init__(self, lname, eye_color):
        print("Parent constructor called")
        self.lname=lname
        self.eye_color=eye_color

    def show_info(self):
        print("Last Name - "+self.lname)
        print("Eye Colour - "+self.eye_color)

# here we will see the use of inheritance

class Child(Parent):
    def __init__(self, lname, eye_color, no_of_toys):
        print("child constructor called")
        Parent.__init__(self, lname, eye_color)
        self.no_of_toys=no_of_toys

    def show_info(self):
        print("Last Name - "+self.lname)
        print("Eye Colour - "+self.eye_color)
        print("No. of toys - "+str(self.no_of_toys))
        
miley = Child("Cyrus","blue",5)
miley.show_info()
"""print(miley.lname)
print(miley.no_of_toys)"""
