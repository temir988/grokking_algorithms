cache = {}


def get_data_from_server(url):
    # get data from server
    return 'data'


def get_page(url):
    if cache.get(url):
        return cache[url]
    else:
        data = get_data_from_server(url)
        cache[url] = data
        return data
