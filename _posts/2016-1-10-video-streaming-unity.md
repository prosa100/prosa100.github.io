---
title: Video Streaming to Unity
---

## Simple Aproach
The new unity web request api is unusably slow.

	using UnityEngine;
	using System.Collections;
	using UnityEngine.Experimental.Networking;

	public class Stream : MonoBehaviour {
		public string url= "http://172.17.44.121:8080/image.jpg";
		//public Texture2D texture;

		void Start()
		{
			StartCoroutine(LoadTexture(url, false));
		}

		void SetTexture(Texture2D texture)
		{
			//this.texture = texture;
			var render = GetComponent<Renderer>();
			if (render)
				render.material.mainTexture = texture;
			var img = GetComponent<UnityEngine.UI.Image>();
			if(img)
				img.sprite = Sprite.Create(texture, new Rect(0, 0, texture.width, texture.height), Vector2.zero, 1f);
		}

		IEnumerator LoadTexture(string url, bool readable = true)
		{
			while (isActiveAndEnabled)
			{
				UnityWebRequest wr = new UnityWebRequest(url);
				DownloadHandlerTexture texDl = new DownloadHandlerTexture(readable);
				wr.downloadHandler = texDl;
				yield return wr.Send();
				if (!wr.isError)
					SetTexture(texDl.texture);
				else
					print(wr.error);
				wr.Dispose();
			}
		}
	}