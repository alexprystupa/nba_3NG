#!/usr/bin/env python3
# Optimize_3NG_Functions.py

###### Importing important Modules #####

# Data and NBA API
import pandas as pd
import numpy as np
from nba_api.stats.static import players
from nba_api.stats.endpoints import shotchartdetail
from nba_api.stats.endpoints import playercareerstats

#1. Getting Player Data
def get_player_shotchartdetail(player_name, season_id):
    """
    Parameters
    ----------
    player_name: name of the player with Capital
    season_id: ex. 2012-13
    """
    
    # player dictionary
    nba_players = players.get_players()
    player_dict = [player for player in nba_players if player['full_name'] == player_name][0]
    
    # career df
    career = playercareerstats.PlayerCareerStats(player_id=player_dict['id'])
    career_df = career.get_data_frames()[0]
    
    # team id during the season
    team_id = career_df[career_df['SEASON_ID'] == season_id]['TEAM_ID']
    
    # shotchardtdetail endpoint
    shotchartlist = shotchartdetail.ShotChartDetail(team_id=int(team_id), 
                                                   player_id=int(player_dict['id']), 
                                                   season_type_all_star='Regular Season', 
                                                   season_nullable=season_id,
                                                   context_measure_simple="FGA").get_data_frames()
    
    remove_columns = ['PLAYER_ID','GRID_TYPE', 'GAME_ID', 'GAME_EVENT_ID', 'TEAM_ID', 'LOC_X', 'LOC_Y',
                 'SHOT_ATTEMPTED_FLAG', 'GAME_DATE', 'SHOT_TYPE'] 
    
    final_player_df = shotchartlist[0].drop(remove_columns, axis = 1)
    
    return final_player_df

#print(type(get_player_shotchartdetail('Damian Lillard', '2020-21')))



