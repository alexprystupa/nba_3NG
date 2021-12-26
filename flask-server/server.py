#!/usr/bin/env python3
# server.py

from flask import Flask
from Extract_Player import get_player_shotchartdetail

# Data and NBA API
import pandas as pd
import numpy as np
from nba_api.stats.static import players
from nba_api.stats.endpoints import shotchartdetail
from nba_api.stats.endpoints import playercareerstats

app = Flask(__name__)

@app.route("/api/nba", methods = ['GET'])

def nba():
    dame = get_player_shotchartdetail('Damian Lillard', '2020-21').head()
    dict_dame = dame.to_json(orient = 'records')
    return dict_dame

if __name__ == "__main__":
    app.run(debug=True)