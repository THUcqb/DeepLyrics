import pypinyin

class Extractor(object):
    '''Extract conditions from a song lyrics.'''

    def __init__(self, lyrics):
        self.lyrics = lyrics
        self.lines = lyrics.split('\n')
        self.lines = [line for line in self.lines if line != '']

    def get(self):
        cond = {
            'keywords': [],
            'rhythms': [],
            'lengths': []
        }

        return cond

class SimpleExtractor(Extractor):
    '''Extract conditions from a song lyrics stupidly.'''

    def get(self):
        cond = {
            'keywords': [line[-1] for line in self.lines],
            'rhythms': [
                pypinyin.pinyin(line, style=pypinyin.Style.FINALS)[-1][0]
                for line in self.lines
            ],
            'lengths': [len(line) for line in self.lines]
        }

        return cond
