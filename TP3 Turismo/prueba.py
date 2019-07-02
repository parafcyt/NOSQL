class NodoLista():   
    info,sig = None,None

class TReg():
    nom,edad,ecivil,dire=None,0,None,None

lista= 


def buscarEnLista(l,x):
    pos=-1
    i=0
    while ((l.est[i]!=x) and (i<=l.limite)):
        if l.est[i]==x:
            pos=i
        i+=1    
    return pos 