#!/usr/bin/python3
if __name__ == "__main__":
    """print all hidden directories"""
    import hidden_4

    for idx in dir(hidden_4):
        if idx[:2] != "__":
            print(idx)