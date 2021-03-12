#Delete last node of the movie
class MovieNode:
    def __init__(self,movieName,relDate):
        self.movieName=movieName
        self.relDate=relDate
        self.next=None
        
class NetFlixMovieList:
    def __init__(self):
        self.head=None

    def addMovie(self,movieName,relDate):
        new = MovieNode(self,movieName,relDate)
        if self.head==None:
            self.head=new

        new.next=self.head
        self.head=new
    def deleteLast(self):
        if self.head==None:
            print("No movieto delete right now")

        secondLast=self.head
        while(secondlast.next.next!=None):
            secondLast=secondLast.next
            
        delete(secondLast.next)
        secondLast.next=None

    def display(self):
        if self.head==None:
            print("No movie to show right now")

        temp=self.head

        while(temp!=None):
            print(temp.movieName,temp.relDate)
            temp=temp.next

movie_li=NetFlixMovieList()
movie_li.addMovie("student of the year","12th june 2018")
movie_li.addMovie("DDLJ","12 may 1998")
movie_li.display()
        

        
