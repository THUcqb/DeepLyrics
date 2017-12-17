class Generator(object):
    '''Generate a song lyrics with extracted conditions.'''

    def __init__(self, conditions):
        self.conditions = conditions

    def get(self):
        return '\n'.join([])

class SimpleGenerator(Generator):
    '''Generate a song lyrics with extracted conditions stupidly.'''

    def get(self):
        return '\n'.join([
            keyword * length
            for keyword, length in\
                zip(self.conditions['keywords'], self.conditions['lengths'])
        ])
